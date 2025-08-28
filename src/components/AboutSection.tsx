'use client'
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const aboutInfo = [
    {
      titulo: "Excelência em Valuation",
      descricao: "Nossa equipe especializada e experiente em valuation garante precisão usando as melhores práticas e metodologias atualizadas."
    },
    {
      titulo: "Abordagem Personalizada",
      descricao: "Entendemos a unicidade de cada empresa. Trabalharemos com você para entender suas necessidades e objetivos específicos, criando uma abordagem sob medida"
    },
    {
      titulo: "Confidencialidade e Integridade",
      descricao: "Protegemos suas informações com rigor e valorizamos a confiança que você deposita em nós. Garantimos total confidencialidade e aderimos a padrões éticos rigorosos para proteger suas informações durante o processo de valuation."
    },
    {
      titulo: "Pesquisa de Mercado e Análise de Tendências",
      descricao: "Entenda o mercado em que você está atuando. Quem são seus concorrentes? Quais são as tendências do setor? Isso ajudará você a tomar decisões informadas."
    },
    {
      titulo: "Networking e Parcerias",
      descricao: "Construa relacionamentos com outros empresários, clientes e fornecedores. Parcerias estratégicas podem abrir portas para novos mercados e oportunidades."
    },
    {
      titulo: "Inovação e Diversificação",
      descricao: "Explore novos produtos ou serviços que possam atrair diferentes segmentos de clientes. A diversificação pode ajudar a mitigar riscos."
    },
    {
      titulo: "Marketing Eficiente",
      descricao: "Invista em marketing digital, redes sociais e publicidade direcionada. Conheça seu público-alvo e crie campanhas relevantes."
    },
    {
      titulo: "Acompanhe Indicadores de Desempenho",
      descricao: "Defina metas claras e acompanhe indicadores-chave de desempenho (KPIs). Isso ajudará você a medir o progresso e fazer ajustes conforme necessário."
    },
  ];

  return (
    <section id="about" className="w-full flex flex-col items-center justify-center sm:py-24 relative gap-12 px-6 bg-gradient-to-b from-secondary-50 to-white overflow-hidden">
      {/* Imagens decorativas de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary-500/20 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-tl from-primary-500/20 to-transparent blur-3xl"
        />
      </div>

      {/* Imagens flutuantes */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 right-20 w-32 h-32 opacity-20 pointer-events-none"
      >
        <Image
          src="/paperwork.jpg"
          width={128}
          height={128}
          alt=""
          className="rounded-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-20 left-20 w-24 h-24 opacity-20 pointer-events-none"
      >
        <Image
          src="/destaque-about.jpg"
          width={96}
          height={96}
          alt=""
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-4 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-secondary-800">
          Por que escolher a{' '}
          <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
            Barao & Saraiva?
          </span>
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Nossa expertise e metodologia comprovada garantem resultados excepcionais para seu negócio
        </p>
      </motion.div>

      {/* Grid de Cards */}
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aboutInfo.map((item, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-200 h-full hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <Award className="text-xl font-bold text-primary-600" />
                  </div>
                  <TextGenerateEffect
                    words={item.titulo}
                    className="text-lg font-semibold text-secondary-800"
                  />
                </div>
                <p className="text-secondary-600 leading-relaxed text-sm">
                  {item.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full"
      >
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary-600">+100</div>
          <div className="text-secondary-600">Empresas Avaliadas</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary-600">+50</div>
          <div className="text-secondary-600">Transações Realizadas</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary-600">15+</div>
          <div className="text-secondary-600">Anos de Experiência</div>
        </div>
      </motion.div>
    </section>
  );
}