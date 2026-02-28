import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, FileWarning, Scale, CheckCircle2 } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
      title: 'Multas Ambientais',
      description: 'O descarte irregular pode gerar multas altíssimas e até a interdição do seu estabelecimento.',
    },
    {
      icon: <FileWarning className="w-8 h-8 text-amber-500" />,
      title: 'Burocracia do MTR',
      description: 'A emissão do Manifesto de Transporte de Resíduos (MTR) é complexa e exige tempo da sua equipe.',
    },
    {
      icon: <Scale className="w-8 h-8 text-slate-500" />,
      title: 'Insegurança Jurídica',
      description: 'A falta de rastreabilidade e certificados de destinação final expõe sua empresa a riscos legais.',
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Não coloque sua empresa em risco com o descarte inadequado.
          </h2>
          <p className="text-lg text-slate-600">
            A gestão de resíduos em clínicas, hospitais e indústrias exige conformidade estrita com a legislação. 
            Nós resolvemos os principais desafios do seu negócio:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              A Biocoletar é a solução definitiva para a sua tranquilidade.
            </h3>
            <p className="text-emerald-100 text-lg mb-8">
              Assumimos toda a responsabilidade técnica e operacional: desde a coleta pontual com frota própria 
              até a emissão do MTR e Certificado de Destinação Final (CDF).
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-white bg-emerald-800/50 px-4 py-2 rounded-full border border-emerald-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Rastreabilidade Total</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-emerald-800/50 px-4 py-2 rounded-full border border-emerald-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Suporte Técnico</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-emerald-800/50 px-4 py-2 rounded-full border border-emerald-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Segurança Jurídica</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
