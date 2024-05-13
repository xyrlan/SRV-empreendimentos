import { Form } from "@/components/Form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen max-lg:pt-28">
      <div className="flex lg:flex-row flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center lg:bg-gray-200 lg:dark:bg-slate-950 border-r border-slate-400 dark:border-slate-700  z-10 gap-5 sm:gap-10 px-4 md:px-12 ">
          {/* <Image src="/ativo.svg" width={80} height={80} alt="SRV Empreendimentos" /> */}
          <h1 className="sr-only">Fale Conosco</h1>
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold max-w-xl text-xl md:text-2xl 2xl:text-3xl text-slate-950 dark:text-neutral-200 sm:py-4">Preparado para avaliar ou vender sua empresa com a SRV?</p>
            <p className="font-medium max-w-xl text-sm md:text-lg 2xl:text-xl text-slate-700 dark:text-neutral-400 py-4">Preencha o formulário para um de nossos especialistas entrar em contato e apresentar nosso negócio.</p>
          </div>
          <Image src="/mulher-notebook.jpg" width={400} height={400} alt="Mulher mexendo no notebook" className='rounded-xl' />
        </div>
        <div className=" flex flex-col flex-grow items-center justify-center px-4 py-4 rounded">
          <p className="font-medium max-w-xl text-sm md:text-xl text-slate-700 dark:text-neutral-400 py-4">Se você tem interesse em conhecer nossos ativos ou mesmo falar conosco, mande uma mensagem.</p>
          <Form />
        </div>
        <BackgroundBeams />
      </div>

      <div className="bg-gray-200 dark:bg-slate-950 border-t border-slate-400 dark:border-slate-700 flex justify-center py-12 md:py-20 px-4">
        <div className="max-w-7xl grid grid-cols-2 gap-20">
          <div className="">
            <h3 className="md:text-2xl py-4 border-b border-slate-400 dark:border-slate-700 text-lg">Contatos</h3>
            <h4 className="my-5 md:text-2xl text-lg">Emails</h4>
            <p className="text-blue-800 dark:text-blue-300">blalblall@gmail.com</p>
          </div>
          <div>
            <h3 className="md:text-2xl py-4 border-b border-slate-400 dark:border-slate-700 text-lg">Fale Agora</h3>
            <h4 className="my-5 md:text-2xl text-lg">Telefones</h4>
            <p className="text-blue-800 dark:text-blue-300">44512312312</p>
          </div>
        </div>
      </div>
    </main>
  )
}