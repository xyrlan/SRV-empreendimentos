import { TextGenerateEffect } from "./ui/text-generate-effect";

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
<section id="about" className="w-full flex flex-col items-center justify-center py-20">
      <h2 className="text-5xl my-12 drop-shadow-lg font-bold text-slate-800 dark:text-neutral-300">Porque escolher a SRV?</h2>
      <div>
        {aboutInfo.map((item) => (
<div>
  <h3>{item.titulo}</h3>
  <TextGenerateEffect words={item.descricao} />
</div>
          ))}
      </div>
    </section>
  )
}