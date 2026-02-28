import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quem pode solicitar a coleta de óleo usado?',
      answer: 'Atendemos diversos tipos de geradores em Teresina e região, incluindo restaurantes, lanchonetes, padarias, condomínios residenciais, indústrias alimentícias e até mesmo residências (dependendo do volume). Se você gera óleo de fritura usado, nós podemos ajudar!',
    },
    {
      question: 'Como funciona o programa de troca por produtos de limpeza?',
      answer: 'É simples! A cada quantidade estipulada de litros de óleo usado entregue à Biocoletar, você acumula créditos que podem ser trocados por produtos de limpeza de alta qualidade, como sabão em barra, detergente líquido, desinfetante, entre outros. Consulte nossa tabela de conversão pelo WhatsApp.',
    },
    {
      question: 'Vocês fornecem o recipiente para armazenar o óleo?',
      answer: 'Sim! Para clientes comerciais e condomínios, nós fornecemos comodato de bombonas (galões) adequadas e seguras para o armazenamento temporário do óleo no seu estabelecimento. Quando o recipiente estiver cheio, basta solicitar a coleta.',
    },
    {
      question: 'A coleta tem algum custo?',
      answer: 'Não, a coleta do óleo de cozinha usado é totalmente gratuita. Pelo contrário, dependendo do volume, você ainda é bonificado através do nosso programa de troca por produtos de limpeza.',
    },
    {
      question: 'Como faço para agendar uma coleta?',
      answer: 'O agendamento é rápido e prático. Basta clicar no botão do WhatsApp disponível no site, informar seu endereço e a quantidade aproximada de óleo. Nossa equipe agendará a melhor data e horário para a retirada.',
    },
    {
      question: 'A Biocoletar emite certificado de destinação?',
      answer: 'Sim. Atuamos em total conformidade com as normas ambientais. Emitimos o Certificado de Destinação Final (CDF), documento essencial para comprovar que sua empresa realizou o descarte correto e ecologicamente responsável do resíduo.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas sobre nosso processo de coleta, agendamento e bonificações.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-green-600 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5586999985220"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
          >
            Fale com nossa equipe no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
