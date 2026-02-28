import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, ExternalLink, Heart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function InstagramFeed() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      id: 'DVPKznAgBmw',
      imageUrl: 'https://www.instagram.com/p/DVPKznAgBmw/media/?size=l',
      link: 'https://www.instagram.com/biocoletar/p/DVPKznAgBmw/',
      likes: 153,
      comments: 14,
      text: 'Trabalhando diariamente por um mundo mais limpo e sustentável. Nosso compromisso é com o amanhã! 🌎'
    },
    {
      id: 'DVGYGfCEYpv',
      imageUrl: 'https://www.instagram.com/p/DVGYGfCEYpv/media/?size=l',
      link: 'https://www.instagram.com/p/DVGYGfCEYpv/?img_index=1',
      likes: 98,
      comments: 8,
      text: 'Sustentabilidade e compromisso com o meio ambiente em cada coleta realizada a nossa equipe entrega excelência. 🌱'
    },
    {
      id: 'DVBfJACkTzL',
      imageUrl: 'https://www.instagram.com/p/DVBfJACkTzL/media/?size=l',
      link: 'https://www.instagram.com/p/DVBfJACkTzL/',
      likes: 215,
      comments: 24,
      text: 'Mais uma coleta de óleo realizada com sucesso! Faça sua parte e descarte corretamente em nossos pontos de apoio. 🚛'
    },
    {
      id: 'DUt7bBske35',
      imageUrl: 'https://www.instagram.com/p/DUt7bBske35/media/?size=l',
      link: 'https://www.instagram.com/p/DUt7bBske35/',
      likes: 176,
      comments: 11,
      text: 'Faça o descarte correto do seu óleo de cozinha e evite a contaminação da nossa água, entre em contato e saiba como! 💧'
    },
    {
      id: 'DUoQW6-ke14',
      imageUrl: 'https://www.instagram.com/p/DUoQW6-ke14/media/?size=l',
      link: 'https://www.instagram.com/p/DUoQW6-ke14/',
      likes: 134,
      comments: 9,
      text: 'Transformando resíduos altamente poluentes em novos produtos e parcerias. Economia circular na prática! 🔄'
    }
  ];

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 350;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-2 rounded-full">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Acompanhe no Instagram
              </h2>
            </div>
            <p className="text-lg text-slate-600">
              Fique por dentro das nossas ações, dicas de sustentabilidade e o dia a dia da nossa equipe em Teresina.
            </p>
          </div>
          <a
            href="https://www.instagram.com/biocoletar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors shrink-0"
          >
            Seguir @biocoletar
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="relative group/slider">
          {/* Navegação de Slider (Setas) */}
          <button
            onClick={() => scrollSlider('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 items-center justify-center text-slate-800 hover:bg-green-50 hover:text-green-600 transition-colors opacity-0 group-hover/slider:opacity-100"
            aria-label="Rolar para a esquerda"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar"
          >
            {posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative min-w-[280px] sm:min-w-[320px] w-[280px] sm:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md snap-center shrink-0 bg-slate-100"
              >
                <img
                  src={post.imageUrl}
                  alt="Post do Instagram"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback para logo em caso de bloqueio do Instagram
                    (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}biocoletar-logo.png`;
                    (e.target as HTMLImageElement).className = "w-full h-full object-contain p-8 bg-white group-hover:scale-110 transition-transform duration-700";
                  }}
                />

                {/* Overlay interativo com degradê */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {/* Imagem pequena de perfil imitando design real do Instagram */}
                    <img src={`${import.meta.env.BASE_URL}biocoletar-logo.png`} alt="Perfil" className="w-8 h-8 rounded-full bg-white object-contain p-0.5" />
                    <span className="text-white text-xs font-bold">biocoletar</span>
                  </div>
                  <p className="text-white text-sm line-clamp-3 mb-4">
                    {post.text}
                  </p>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-5 h-5 fill-white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Instagram Icon Badge (visível até interação) */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-100 group-hover:opacity-0 transition-opacity">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => scrollSlider('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 items-center justify-center text-slate-800 hover:bg-green-50 hover:text-green-600 transition-colors opacity-0 group-hover/slider:opacity-100"
            aria-label="Rolar para a direita"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
