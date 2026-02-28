import React from 'react';
import { Leaf, Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/biocoletar-logo.png" 
                alt="Biocoletar" 
                className="w-[150px] max-w-full h-auto bg-white p-3 rounded-xl object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Seu parceiro em sustentabilidade. Especialistas em gestão e reciclagem de óleo de cozinha usado em Teresina e região.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/#inicio" className="hover:text-green-500 transition-colors">Início</a></li>
              <li><a href="/#sobre" className="hover:text-green-500 transition-colors">Sobre Nós</a></li>
              <li><a href="/#servicos" className="hover:text-green-500 transition-colors">Serviços</a></li>
              <li><a href="/#faq" className="hover:text-green-500 transition-colors">FAQ</a></li>
              <li><a href="/blog" className="hover:text-green-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-6">Contatos e Endereço</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>(86) 3211-4691</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>(86) 99998-5220 (WhatsApp)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span>contato@biocoletar.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                <span>Teresina - PI e Região</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-6">Horário de Atendimento</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Segunda a Sexta: 08:00 às 18:00</li>
              <li>Sábado: 08:00 às 12:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Biocoletar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
