import { Form } from "@/components/Form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen flex lg:flex-row flex-col max-md:pt-28">
      <div className="flex flex-col justify-center md:bg-gray-200 md:dark:bg-slate-950 border-r border-slate-400 dark:border-slate-700  z-10 gap-5 sm:gap-10 px-4 md:px-12 ">
        <Image src="/ativo.svg" width={80} height={80} alt="SRV Empreendimentos" />
        <h1 className="sr-only">Fale Conosco</h1>
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold max-w-xl text-xl md:text-4xl text-slate-950 dark:text-neutral-200 sm:py-4">Preparado para avaliar ou vender sua empresa com a SRV?</p>
          <p className="font-medium max-w-xl text-sm md:text-xl text-slate-700 dark:text-neutral-400 sm:py-4">Preencha o formulário para um de nossos especialistas entrar em contato e apresentar nosso negócio.</p>
        </div>
      </div>
      <div className=" flex flex-grow items-center justify-center">
        <Form />
      </div>
        <BackgroundBeams />
    </main>
  )
}