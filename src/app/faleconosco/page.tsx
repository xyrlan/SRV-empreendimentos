import { Form } from "@/components/Form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen max-lg:pt-28">
      <div className="flex lg:flex-row flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center lg:bg-secondary-100 border-r border-secondary-300 z-10 gap-5 sm:gap-10 px-4 md:px-12">
          <h1 className="sr-only">Fale Conosco</h1>
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold max-w-xl text-xl md:text-2xl 2xl:text-3xl text-secondary-800 sm:py-4">Preparado para avaliar ou vender sua empresa com a SRV?</p>
            <p className="font-medium max-w-xl text-sm md:text-lg 2xl:text-xl text-secondary-600 py-4">Preencha o formulário para um de nossos especialistas entrar em contato e apresentar nosso negócio.</p>
          </div>
          <Image src="/mulher-notebook.jpg" width={400} height={400} alt="Mulher mexendo no notebook" className='rounded-xl' />
        </div>
        <div className=" flex flex-col flex-grow items-center justify-center px-4 py-4 rounded">
          <p className="font-medium max-w-xl text-sm md:text-xl text-secondary-600 py-4">Se você tem interesse em conhecer nossos ativos ou mesmo falar conosco, mande uma mensagem.</p>
          <Form />
        </div>
        <BackgroundBeams />
      </div>

      <div className="bg-secondary-100 border-t border-secondary-300 flex justify-center py-12 md:py-20 px-4">
        <div className="max-w-7xl grid grid-cols-2 gap-20">
          <div className="">
            <h3 className="md:text-2xl py-4 border-b border-secondary-300 text-lg text-secondary-800">Contatos</h3>
            <h4 className="my-5 md:text-xl text-secondary-700">Emails</h4>
            <div className="flex gap-2">
              <Mail className="h-6 w-6 text-primary-900" />
              <p className="text-primary-900">contato@srvempreendimentos.com.br</p>
            </div>
          </div>
          <div>
            <h3 className="md:text-2xl py-4 border-b border-secondary-300 text-lg text-secondary-800">Fale Agora</h3>
            <h4 className="my-5 md:text-xl text-secondary-700">Telefones</h4>
            <Link
              href="https://www.instagram.com/baraoesaraiva"
              rel="noreferrer"
              target="_blank"
              className="text-secondary-600 transition hover:text-primary-600"
            >
              <div className="flex gap-2">
                <svg className="h-6 w-6 text-primary-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <g id="WA_Logo">
                    <g>
                      <path fillRule='evenodd' d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z" />
                    </g>
                  </g>
                </svg>
                <p className="text-primary-900">
                  (67) 9 9909-2929
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}