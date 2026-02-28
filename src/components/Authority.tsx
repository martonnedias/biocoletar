import React from 'react';
import { motion } from 'motion/react';
import { Users, Truck, ShieldCheck, Target, Eye, Heart, PlayCircle } from 'lucide-react';

export default function Authority() {
  const mvv = [
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Missão',
      description: 'Oferecer soluções inovadoras e sustentáveis na gestão de resíduos, transformando o óleo de cozinha usado em novos recursos, promovendo a preservação ambiental e a conscientização da sociedade.',
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: 'Visão',
      description: 'Ser a principal referência no Nordeste em logística reversa e reciclagem de óleo vegetal, reconhecida pela excelência operacional, transparência e impacto socioambiental positivo.',
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'Valores',
      description: 'Sustentabilidade, Ética e Transparência, Inovação Contínua, Valorização das Pessoas e Compromisso com o Meio Ambiente e as Futuras Gerações.',
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Por que a Biocoletar?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Somos a referência em Teresina na coleta de óleo de cozinha usado. Nossa operação é desenhada para oferecer o máximo de segurança, higiene e conformidade para o seu negócio.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-xl h-fit">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Equipe Treinada e Uniformizada</h3>
                  <p className="text-slate-600">Nossos profissionais são capacitados para realizar a coleta de forma limpa e rápida, sem atrapalhar a rotina do seu estabelecimento.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-xl h-fit">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Equipamentos Modernos</h3>
                  <p className="text-slate-600">Utilizamos veículos e recipientes adequados que evitam vazamentos e odores durante o transporte e armazenamento.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-xl h-fit">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Conformidade Ambiental Total</h3>
                  <p className="text-slate-600">Garantimos que 100% do óleo coletado seja destinado à reciclagem, emitindo os certificados exigidos pelos órgãos fiscalizadores.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-600 rounded-3xl transform rotate-3 opacity-10"></div>
            <img
              src={`${import.meta.env.BASE_URL}equipe-biocoletar.png`}
              alt="Equipe Biocoletar"
              className="relative rounded-3xl shadow-2xl object-cover h-[400px] md:h-[600px] w-full"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                // Fallback caso a imagem não tenha sido movida para a pasta public ainda
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </motion.div>
        </div>

        {/* Vídeos Demonstrativos */}
        <div className="mb-24 pt-12 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Veja como funciona na prática
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Acompanhe nosso processo de coleta e entenda o impacto positivo da reciclagem do óleo de cozinha.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-slate-100 group cursor-pointer"
            >
              <video
                src={`${import.meta.env.BASE_URL}video-coleta.mp4`}
                poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-16 h-16 text-white/80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="font-bold text-xl mb-1 drop-shadow-md">Processo de Coleta</h4>
                <p className="text-sm text-slate-200 drop-shadow-md">Coleta rápida, limpa e eficiente no seu estabelecimento.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-slate-100 group cursor-pointer"
            >
              <video
                src={`${import.meta.env.BASE_URL}video-beneficios.mp4`}
                poster="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-16 h-16 text-white/80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="font-bold text-xl mb-1 drop-shadow-md">Benefícios da Reciclagem</h4>
                <p className="text-sm text-slate-200 drop-shadow-md">Transformando resíduos poluentes em novos produtos sustentáveis.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-100">
          {mvv.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-green-100 transition-all text-center"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
