import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendes',
      role: 'Gerente de Restaurante',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      text: 'A parceria com a Biocoletar transformou a nossa gestão de resíduos. A coleta é sempre pontual, a equipe é muito educada e o certificado ambiental nos dá total tranquilidade com a fiscalização.',
    },
    {
      id: 2,
      name: 'Mariana Costa',
      role: 'Dona de Padaria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      text: 'Antes tínhamos muita dor de cabeça com o descarte do óleo. Hoje, com os bombonas fornecidos pela Biocoletar, o processo ficou limpo e organizado. Recomendo de olhos fechados!',
    },
    {
      id: 3,
      name: 'Roberto Almeida',
      role: 'Chef de Cozinha',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      text: 'Excelente serviço! Além de ajudarmos o meio ambiente, o atendimento via WhatsApp é super rápido. Sempre que precisamos de uma coleta extra, somos atendidos prontamente.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              O que dizem nossos clientes
            </h2>
            <p className="text-lg text-slate-600">
              Veja como a Biocoletar tem ajudado estabelecimentos em Teresina e região a gerenciar o descarte de óleo de forma eficiente e sustentável.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-green-100" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
