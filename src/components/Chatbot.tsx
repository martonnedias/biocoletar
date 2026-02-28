import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '@google/genai';
import ReactMarkdown from 'react-markdown';

// Initialize Gemini API
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

type Message = {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Olá! Sou o assistente virtual da Biocoletar. Como posso ajudar você hoje? Posso agendar coletas, tirar dúvidas sobre descarte de óleo ou consultar seu cadastro.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Store the chat session
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize chat session on mount
  useEffect(() => {
    if (!chatSessionRef.current && ai) {
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: `Você é o assistente virtual da Biocoletar, uma empresa de Teresina, Piauí, especializada na coleta e reciclagem de óleo de cozinha usado. 
          
REGRAS IMPORTANTES:
1. Fale APENAS sobre assuntos relacionados à empresa, agendamento de coleta, dúvidas sobre descarte de óleo, sustentabilidade e informações da conta do cliente.
2. Se o usuário perguntar sobre outros assuntos (política, esportes, programação, etc.), diga educadamente que você é um assistente focado apenas nos serviços da Biocoletar.
3. Responda de forma educada, profissional, sustentável e concisa.
4. Use as ferramentas (functions) disponíveis para consultar dados do cliente ou agendar coletas quando o usuário solicitar.
5. Se o usuário quiser saber sobre pagamentos ou bonificações, peça o CNPJ/CPF e use a ferramenta consultarPagamento.
6. Se o usuário quiser agendar, peça a data, endereço e volume estimado, e use a ferramenta agendarColeta.`,
          temperature: 0.3,
          tools: [{
            functionDeclarations: [
              {
                name: 'agendarColeta',
                description: 'Agenda uma coleta de óleo de cozinha usado para um cliente.',
                parameters: {
                  type: Type.OBJECT,
                  properties: {
                    data: { type: Type.STRING, description: 'Data desejada para a coleta (ex: 15/11/2023)' },
                    endereco: { type: Type.STRING, description: 'Endereço completo para a coleta em Teresina ou região' },
                    volume: { type: Type.STRING, description: 'Volume estimado de óleo em litros' }
                  },
                  required: ['data', 'endereco', 'volume']
                }
              },
              {
                name: 'consultarStatusCliente',
                description: 'Consulta o status do cliente, próxima coleta e histórico usando o documento.',
                parameters: {
                  type: Type.OBJECT,
                  properties: {
                    documento: { type: Type.STRING, description: 'CPF ou CNPJ do cliente' }
                  },
                  required: ['documento']
                }
              },
              {
                name: 'consultarPagamento',
                description: 'Consulta informações de pagamento, bonificações ou saldo de troca por produtos de limpeza.',
                parameters: {
                  type: Type.OBJECT,
                  properties: {
                    documento: { type: Type.STRING, description: 'CPF ou CNPJ do cliente' }
                  },
                  required: ['documento']
                }
              }
            ]
          }]
        },
      });
    }
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading || !chatSessionRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      let response = await chatSessionRef.current.sendMessage({ message: userMessage });

      // Handle function calls if the model decides to use a tool
      if (response.functionCalls && response.functionCalls.length > 0) {
        for (const call of response.functionCalls) {
          let functionResult = '';

          // Mocking the backend responses
          if (call.name === 'agendarColeta') {
            const { data, endereco, volume } = call.args as any;
            functionResult = `Sucesso! Coleta de ${volume} agendada para ${data} no endereço: ${endereco}. O motorista entrará em contato.`;
          } else if (call.name === 'consultarStatusCliente') {
            const { documento } = call.args as any;
            functionResult = `Cliente com documento ${documento} encontrado. Status: Ativo. Próxima coleta programada para a próxima semana. Última coleta: 50 litros.`;
          } else if (call.name === 'consultarPagamento') {
            const { documento } = call.args as any;
            functionResult = `Cliente com documento ${documento} possui um saldo de R$ 45,00 ou equivalente em produtos de limpeza (sabão/detergente) disponíveis para resgate na próxima coleta.`;
          }

          // Send the function result back to the model as a system message
          response = await chatSessionRef.current.sendMessage({
            message: `[Sistema - Resultado da Função ${call.name}]: ${functionResult}. Agora, responda ao usuário de forma natural repassando essas informações.`
          });
        }
      }

      const modelText = response.text;
      if (modelText) {
        setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'model', text: modelText }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [...prev, {
        id: Date.now().toString(),
        role: 'system',
        text: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-slate-900 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-slate-800 hover:scale-110 transition-all duration-300 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir chat de atendimento"
      >
        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
          1
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto z-50 w-full sm:w-[400px] h-[90vh] sm:h-[600px] bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Assistente Biocoletar</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.role === 'user'
                      ? 'bg-green-600 text-white rounded-tr-sm'
                      : msg.role === 'system'
                        ? 'bg-rose-100 text-rose-800 rounded-tl-sm text-center w-full'
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm'
                      }`}
                  >
                    {msg.role === 'model' ? (
                      <div className="prose prose-sm prose-p:my-1 prose-a:text-green-600">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-2 text-slate-500">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Digitando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 pb-6 sm:pb-4">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-green-600 text-white p-2.5 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  title="Enviar mensagem"
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
