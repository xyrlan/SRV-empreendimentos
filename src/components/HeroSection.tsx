import { CallButton } from "./buttons/CallButton";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { ImagesSliderProvider } from "./image-slider-provider";

export default function HeroSection() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <ImagesSliderProvider>
        <p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 py-4">
          Consultoria de valuation e venda<br /> indústria, empresas e startups.
        </p>
        <p className="font-medium max-w-2xl text-lg md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b to-neutral-50 from-neutral-500 py-4">
          Somos uma Consultoria Empresarial dedicada ao mercado de estratégia, finanças corporativas e análises de mercado.
        </p>
        <CallButton />
      </ImagesSliderProvider>
    </main>
  )
}