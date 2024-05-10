import { CallButton } from "./buttons/CallButton";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { ImagesSliderProvider } from "./image-slider-provider";
import { StatComponent } from "./stat-component";

export default function HeroSection() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <ImagesSliderProvider>
        <h1 className="font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4">
          Consultoria de valuation e venda<br />de indústrias, empresas e startups.
        </h1>
        <p className="font-medium max-w-2xl text-lg md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b to-white from-neutral-400 py-4">
         Especializados em valuation e venda de negócios, temos o comprador certo para continuar o seu negócio para que você prospere em novos desafios.
        </p>
        <CallButton />
        <StatComponent />
      </ImagesSliderProvider>
    </main>
  )
}