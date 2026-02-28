import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Droplets, Leaf, MessageCircle, MapPin } from 'lucide-react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const foregroundImages = [
    `${import.meta.env.BASE_URL}coleta-de-oleo-biocoletar.png`,
    `${import.meta.env.BASE_URL}parceiro-biocoletar.jpg`,
    `${import.meta.env.BASE_URL}reciclagem.jpg`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foregroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative bg-slate-50 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Profissionais com EPIs manuseando resíduos"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-green-50/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-800 font-medium text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>Atendimento em Teresina e Região</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Descarte seu óleo de cozinha de forma <span className="text-green-600">correta, segura e sustentável</span>.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Atendimento profissional com equipe uniformizada e equipamentos de ponta. Evite entupimentos e multas ambientais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5586999985220"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Coleta Grátis
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-green-600" />
                <span>Recipientes Adequados</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span>Conformidade Ambiental</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-green-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl shadow-2xl border border-slate-200 overflow-hidden bg-white">
              {foregroundImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt="Coleta de óleo Biocoletar"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  referrerPolicy="no-referrer"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                  }}
                />
              ))}
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-4 right-4 sm:right-auto sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-xl">100%</p>
                <p className="text-slate-500 text-sm font-medium">Sustentável & Seguro</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
