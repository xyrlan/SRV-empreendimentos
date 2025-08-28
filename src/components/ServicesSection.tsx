import { BackgroundGradient } from "./ui/backgroudn-gradient"
import { Handshake, CircleDollarSign, Gem } from "lucide-react"

export default function ServicesSection() {
  const serviceCards = [
    {
      icon: <Handshake className="text-primary-500" />,
      title: "M&A",
      description: "Os processos de Fusões e Aquisições, ou M&A(Mergers and Acquisitions), possuem particularidades que devem ser entendidas e tratadas por profissionais com ampla experiência na área para se obter uma estratégia bem sucedida.",
    },
    {
      icon: <CircleDollarSign className="text-primary-500" />,
      title: "Venda de Empresas",
      description: "A venda de uma empresa é um processo complexo que envolve diversas etapas e deve ser conduzida por profissionais especializados. Nós da Barao & Saraiva possuímos a expertise necessária para conduzir o processo de venda de sua empresa com segurança e eficiência.",
    },
    {
      icon: <Gem className="text-primary-500" />,
      title: "Valuation",
      description: "Saber o valor de mercado, justo, para sua empresa é importante nas tomadas de decisão. Seja uma decisão por investimentos ou a entrada e saída de um sócio; seja para a venda de partes ou totalidade da empresa; seja para fazer uma gestão estratégica do negócio. Para que as decisões sejam tomadas com segurança e assertividade, é fundamental que o valor da empresa seja calculado de forma correta e precisa.",
    },
  ]

  return (
    <section id="servicos" className="w-full flex flex-col items-center justify-center px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10 max-w-7xl md:-translate-y-[15%] transform">
        {serviceCards.map((card, index) => (
          <BackgroundGradient key={index} className="p-4 lg:p-10 rounded-lg bg-secondary-50 border border-secondary-200 h-full select-none hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl mb-4">
              {card.icon}
            </div>
            <p className="text-base sm:text-xl text-secondary-800 mt-4 mb-2 font-semibold">
              {card.title}
            </p>
            <p className="text-sm text-secondary-600">
              {card.description}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  )
}