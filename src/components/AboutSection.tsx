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

  const groupedInfo = [];
  for (let i = 0; i < aboutInfo.length; i += 4) {
    groupedInfo.push(aboutInfo.slice(i, i + 4));
  }

  return (
    <section id="about" className="w-full flex flex-col items-center justify-center sm:py-24 relative gap-5 px-6">
      <h2 className="text-3xl my-12 drop-shadow-lg font-bold text-slate-800 dark:text-neutral-300">Por que escolher a SRV?</h2>
      {groupedInfo.map((group, index) => (
        <div key={index} className={`max-w-7xl flex ${index % 2 === 0 ? "md:flex-row flex-col" : "flex-col md:flex-row-reverse text-end"} gap-10 md:gap-20 items-center justify-center my-4`}>
          <motion.div className="w-full flex justify-center"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={index % 2 === 0 ? '/paperwork.jpg' : '/destaque-about.jpg'} width={500} height={500} alt="Empresário analisando documentos" className="rounded-xl" />
          </motion.div>
          <div className="space-y-4">
            {group.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className={`inline-flex items-center gap-4  ${index % 2 === 0 ? "flex-row" : "flex-row-reverse "}`}>
                  <Award className="text-xl font-bold text-yellow-400" />
                  <TextGenerateEffect words={item.titulo} className="text-xl font-semibold text-[#08003f] dark:text-neutral-100 dark:brightness-110 " />
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 }}
                  viewport={{ once: true }}
                  className="my-2 dark:text-neutral-300 text-neutral-600 ml-10">{item.descricao}</motion.p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}