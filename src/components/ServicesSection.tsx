import { BackgroundGradient } from "./ui/backgroudn-gradient"
import {Handshake, CircleDollarSign, Gem} from "lucide-react"

export default function ServicesSection() {
  const serviceCards = [
    {
      icon: <Handshake /> ,
      title: "M&A",
      description: "Os processos de Fusões e Aquisições, ou M&A(Mergers and Acquisitions), possuem particularidades que devem ser entendidas e tratadas por profissionais com ampla experiência na área para se obter uma estratégia bem sucedida.",
    },
    {
      icon: <CircleDollarSign />,
      title: "Venda de Empresas",
      description: "A venda de uma empresa é um processo complexo que envolve diversas etapas e deve ser conduzida por profissionais especializados. Nós da SRV possuímos a expertise necessária para conduzir o processo de venda de sua empresa com segurança e eficiência.",
    },
    {
      icon: <Gem />,
      title: "Valuation",
      description: "Saber o valor de mercado, justo, para sua empresa é importante nas tomadas de decisão. Seja uma decisão por investimentos ou a entrada e saída de um sócio; seja para a venda de partes ou totalidade da empresa; seja para fazer uma gestão estratégica do negócio. Para que as decisões sejam tomadas com segurança e assertividade, é fundamental que o valor da empresa seja calculado de forma correta e precisa.",
    },
  ]

  return (
    <section id="servicos" className="w-full flex flex-col items-center justify-center py-20">
      <h2 className="text-5xl my-12 drop-shadow-lg font-bold text-slate-800 dark:text-neutral-300">Nossas expertises</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  max-w-7xl">
        {serviceCards.map((card, index) => (
          <BackgroundGradient key={index} className="p-4 lg:p-10 rounded-lg bg-zinc-200 dark:bg-zinc-900 h-full select-none ">
          {card.icon}
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {card.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {card.description}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  )
}