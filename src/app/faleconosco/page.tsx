import { Form } from "@/components/Form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen flex">
      <div className="flex flex-col justify-center bg-gray-100 dark:bg-slate-950 z-10 gap-10 px-12 drop-shadow-lg">
        <Image src="/ativo.svg" width={80} height={80} alt="SRV Empreendimentos" />
        <h1 className="sr-only">Fale Conosco</h1>
        <div className="flex flex-col items-center ">
          <p className="font-bold max-w-xl text-xl md:text-4xl text-slate-950 dark:text-neutral-100 py-4">Preparado para avaliar ou vender sua empresa com a SRV?</p>
          <p className="font-medium max-w-xl text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b to-slate-950 from-neutral-500 dark:to-neutral-50 dark:from-neutral-500 py-4">Preencha o formulário para um de nossos especialistas entrar em contato e apresentar nosso negócio.</p>
        </div>
      </div>
      <div className=" flex flex-grow items-center justify-center">
        <Form />
      </div>
        <BackgroundBeams />
    </main>
  )
}