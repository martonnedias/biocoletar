import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

export default function InstagramFeed() {
  // Links reais fornecidos
  const posts = [
    {
      id: 'DVJ_HquERPA',
      imageUrl: 'https://instagram.com/p/DVJ_HquERPA/media/?size=l',
      link: 'https://www.instagram.com/p/DVJ_HquERPA/',
      likes: 142,
      comments: 15,
      text: 'Acompanhe nosso trabalho na Biocoletar! Juntos por um mundo mais sustentável. ♻️'
    },
    {
      id: 'DVGYGfCEYpv',
      imageUrl: 'https://instagram.com/p/DVGYGfCEYpv/media/?size=l',
      link: 'https://www.instagram.com/p/DVGYGfCEYpv/?img_index=1',
      likes: 98,
      comments: 8,
      text: 'Sustentabilidade e compromisso com o meio ambiente em cada coleta realizada. 🌱'
    },
    {
      id: 'DVBfJACkTzL',
      imageUrl: 'https://instagram.com/p/DVBfJACkTzL/media/?size=l',
      link: 'https://www.instagram.com/p/DVBfJACkTzL/',
      likes: 215,
      comments: 24,
      text: 'Mais uma coleta realizada com sucesso! Faça sua parte e descarte corretamente. 🚛'
    },
    {
      id: 'DUt7bBske35',
      imageUrl: 'https://instagram.com/p/DUt7bBske35/media/?size=l',
      link: 'https://www.instagram.com/p/DUt7bBske35/',
      likes: 176,
      comments: 11,
      text: 'Faça o descarte correto do seu óleo de cozinha e evite a contaminação da nossa água. 💧'
    },
    {
      id: 'DUoQW6-ke14',
      imageUrl: 'https://instagram.com/p/DUoQW6-ke14/media/?size=l',
      link: 'https://www.instagram.com/p/DUoQW6-ke14/',
      likes: 134,
      comments: 9,
      text: 'Transformando resíduos altamente poluentes em novos produtos. Economia circular na prática! 🔄'
    },
    {
      id: 'DUjLHznkQ-5',
      imageUrl: 'https://instagram.com/p/DUjLHznkQ-5/media/?size=l',
      link: 'https://www.instagram.com/p/DUjLHznkQ-5/',
      likes: 189,
      comments: 17,
      text: 'Junte-se a nós nessa corrente do bem! Agende sua coleta e participe do nosso programa. 🤝'
    }
  ];

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

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x snap-mandatory hide-scrollbar">
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
                  // Fallback para imagens genéricas caso o endpoint do Instagram bloqueie o carregamento direto
                  const fallbacks = [
                    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                  ];
                  (e.target as HTMLImageElement).src = fallbacks[index % fallbacks.length];
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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
              
              {/* Instagram Icon Badge */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-100 group-hover:opacity-0 transition-opacity">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
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
