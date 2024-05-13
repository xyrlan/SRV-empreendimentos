import Image from 'next/image'
import React from 'react'
import { CallButton } from './buttons/CallButton'

export default function CallSection() {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center py-24 px-6 gap-10'>
      <div className='flex md:flex-row flex-col justify-around items-center gap-20 max-w-7xl'>
        <div className='w-full '>
          <h2 className='text-3xl font-bold my-4'>Definir metas, dar forma ao futuro e chegar lá!</h2>
          <p className='my-6 dark:text-neutral-300'>Somos Especializados em Valuation e venda de Negócios e Indústrias
            Temos o Comprador certo para continuar o seu negócio
            para que você prospere em novos Desafios.
          </p>
          <CallButton />
        </div>
        <div className='relative h-[500px] md:h-[700px] w-full'>
          <Image src={'/destaque-barco.webp'} width={320} height={400} alt="destaque-barco" className='absolute top-0 left-0 rounded-tl-lg  max-sm:w-[200px]' />
          <Image src={'/destaque-mulher-estrada.jpg'} width={320} height={400} alt="destaque-mulher-estrada" className='absolute bottom-0 right-0 rounded-br-lg max-sm:w-[200px]' />
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-around items-center gap-20 max-w-7xl'>

        <Image src={'/destaque-fusao1.jpg.webp'} width={400} height={400} alt="destaque-barco" className='rounded-lg ' />


        <div className=''>
          <h2 className='text-3xl font-bold my-4'>Compre uma empresa sem o risco de começar do zero</h2>
          <p className='my-6 dark:text-neutral-300'>Comprar ou fundir com uma empresa já estabelecida traz sinergia e desenvolvimento estratégico. Mas para que isso aconteça dentro do esperado é preciso respeitar todas as etapas do processo com sigilo e segurança e, claro, contar com uma assessoria na condução desse processo.
          </p>
          <CallButton />
        </div>
      </div>
    </div>
  )
}
