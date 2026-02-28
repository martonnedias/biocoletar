import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Leaf, ShieldCheck, Quote } from 'lucide-react';

export default function ValueProposition() {
  const pillars = [
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: 'Inovador',
      description: 'Utilizamos processos modernos para a coleta e destinação, garantindo eficiência e praticidade para o seu negócio ou residência.',
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Sustentável',
      description: 'Transformamos um resíduo altamente poluente em matéria-prima, preservando a água e o meio ambiente para as futuras gerações.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: 'Confiável',
      description: 'Atuamos em total conformidade com as normas governamentais e ambientais, fornecendo a documentação necessária para sua segurança.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Nossa Proposta de Valor
          </h2>
          <p className="text-lg text-slate-600">
            A Biocoletar é mais do que uma empresa de coleta. Somos o seu parceiro estratégico na gestão sustentável de resíduos em Teresina.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-green-100 transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-green-600 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative">
              {/* Note: The user uploaded an image. We use a placeholder path here. The user should upload the image to the public folder as felipe-silva.jpg */}
              <img
                src={`${import.meta.env.BASE_URL}felipe-silva.jpg`}
                alt="Felipe Silva - Fundador da Biocoletar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  // Fallback if image is not found
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <div className="text-center md:text-left">
              <Quote className="w-12 h-12 text-green-500 mb-6 mx-auto md:mx-0 opacity-50" />
              <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                "O idealismo por um mundo melhor, e o espírito empreendedor deram vida a Biocoletar, um trabalho que orgulha e gera frutos."
              </blockquote>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Felipe Silva</h3>
                <p className="text-green-400 font-semibold tracking-wider uppercase text-sm">
                  Fundador e Idealizador
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
