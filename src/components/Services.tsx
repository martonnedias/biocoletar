import React from 'react';
import { motion } from 'motion/react';
import { CalendarClock, Archive, FileCheck, Gift } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <CalendarClock className="w-8 h-8 text-green-600" />,
      title: 'Coleta Programada',
      description: 'Agendamento flexível para restaurantes, condomínios e indústrias, garantindo que o óleo seja recolhido antes de causar transtornos.',
    },
    {
      icon: <Archive className="w-8 h-8 text-green-600" />,
      title: 'Fornecimento de Recipientes',
      description: 'Disponibilizamos galões adequados e seguros para o armazenamento temporário do óleo no seu estabelecimento.',
    },
    {
      icon: <FileCheck className="w-8 h-8 text-green-600" />,
      title: 'Destinação Certificada',
      description: 'Processo de reciclagem rastreável com emissão de certificado de destinação final, comprovando sua responsabilidade ambiental.',
    },
    {
      icon: <Gift className="w-8 h-8 text-green-600" />,
      title: 'Troca por Produtos',
      description: 'Incentivamos a reciclagem trocando o seu óleo de cozinha usado por produtos de limpeza de alta qualidade (sabão, detergente, etc).',
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Serviços Especializados
          </h2>
          <p className="text-lg text-slate-600">
            Soluções completas para a gestão do óleo de cozinha usado, desde o armazenamento até a reciclagem final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a
              href="https://wa.me/5586999985220"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/40"
            >
              Solicitar Recipiente de Coleta
            </a>
        </div>
      </div>
    </section>
  );
}
