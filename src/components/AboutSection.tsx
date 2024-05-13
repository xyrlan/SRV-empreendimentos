'use client'
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TracingBeam } from "./ui/tracing-beam";
import { CallButton } from "./buttons/CallButton";
import { Award } from "lucide-react";
import { motion } from "framer-motion";


export default function AboutSection() {
  const aboutInfo = [
    {
      titulo: "Excelência em Valuation",
      descricao: "Equipe especializada, conhecimento profundo e precisão garantida. Nossa equipe altamente qualificada possui amplo conhecimento do mercado e anos de experiência em valuation, utilizando as melhores práticas e metodologias atualizadas."
    },
    {
      titulo: "Abordagem Personalizada",
      descricao: "Reconhecemos a singularidade de cada negócio. Trabalharemos em estreita colaboração com você para compreender as particularidades do seu empreendimento, suas metas e necessidades específicas, desenvolvendo uma abordagem que atenda às suas expectativas."
    },
    {
      titulo: "Confidencialidade e Integridade",
      descricao: "Protegemos suas informações com rigor e valorizamos a confiança que você deposita em nós. Garantimos total confidencialidade e aderimos a padrões éticos rigorosos para proteger suas informações durante o processo de valuation."
    }
  ];

  return (

    <section id="about" className="w-full flex flex-col items-center justify-center py-24 relative gap-5 px-6">
      <h2 className="text-3xl my-12 drop-shadow-lg font-bold text-slate-800 dark:text-neutral-300">Porque escolher a SRV?</h2>
      <div className="max-w-7xl flex gap-10 md:gap-20 lg:flex-row flex-col justify-center items-center">
        <Image src="/paperwork.jpg" width={500} height={500} alt="Empresario analizando documentos" />
        <div className="space-y-4">
          {aboutInfo.map((item, i) => (
            <div key={i}

              className="space-y-2"
            >
              <div 
              className="inline-flex items-center gap-4">
                <Award className="text-xl font-bold text-yellow-400" />
                <TextGenerateEffect words={item.titulo} className="text-xl font-semibold text-slate-800 dark:text-neutral-300 " />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
                className="my-2 dark:text-neutral-300">{item.descricao}</motion.p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}