import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Solicite um Orçamento
          </h2>
          <p className="text-lg text-slate-600">
            Preencha o formulário abaixo com os detalhes da sua necessidade. Nossa equipe entrará em contato rapidamente.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-12"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitação Enviada!</h3>
              <p className="text-slate-600">
                Agradecemos o seu contato. Nossa equipe de especialistas retornará em breve com uma proposta personalizada.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    required
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="João da Silva"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="joao@empresa.com.br"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-slate-700 mb-2">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="telefone"
                    required
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="tipoEmpresa" className="block text-sm font-medium text-slate-700 mb-2">Tipo de Empresa *</label>
                  <select
                    id="tipoEmpresa"
                    required
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="clinica">Clínica</option>
                    <option value="hospital">Hospital</option>
                    <option value="industria">Indústria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cnpj" className="block text-sm font-medium text-slate-700 mb-2">CNPJ (Opcional)</label>
                  <input
                    type="text"
                    id="cnpj"
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
                <div>
                  <label htmlFor="endereco" className="block text-sm font-medium text-slate-700 mb-2">Endereço Completo *</label>
                  <input
                    type="text"
                    id="endereco"
                    required
                    className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Rua, Número, Bairro, Cidade - MG"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-2">Detalhes da Necessidade (Mensagem) *</label>
                <textarea
                  id="mensagem"
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none"
                  placeholder="Descreva os tipos de resíduos, volume estimado, frequência de coleta desejada, etc."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Solicitação
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
