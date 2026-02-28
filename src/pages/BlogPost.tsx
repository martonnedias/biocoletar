import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <main className="pt-32 pb-24 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Artigo não encontrado</h1>
          <p className="text-lg text-slate-600 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar para o Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Blog
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 flex-wrap">
              <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover max-h-[500px]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-a:text-green-600 hover:prose-a:text-green-700 prose-img:rounded-xl">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.article>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Precisa de ajuda com a gestão de resíduos?</h3>
          <p className="text-slate-600 mb-8">Nossa equipe de especialistas está pronta para ajudar sua empresa a se adequar às normas ambientais.</p>
          <a
            href="https://wa.me/5586999985220"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/40"
          >
            Falar com um Especialista
          </a>
        </div>
      </div>
    </main>
  );
}
