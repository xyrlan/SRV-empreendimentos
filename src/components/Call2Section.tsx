import Image from 'next/image'
import React from 'react'
import { CallButton } from './buttons/CallButton'

export default function Call2Section() {
  return (
    <section id="call2" className="w-full flex flex-col items-center justify-center py-28 md:py-36 relative gap-5 px-6 mt-10">
      <Image src={'/reuniao.jpg'} fill alt="reuniao" className='absolute inset-0 h-full w-full object-center object-cover -z-10' />
      <div className='absolute inset-0 dark:bg-black/60 bg-white/60 z-10' />
      <div className='flex flex-col items-center justify-center gap-7 text-center z-20'>
        <div className='font-medium'>
          <h2 className='md:text-3xl text-2xl text-[#08003f] dark:text-[#aaa1e6] my-2 drop-shadow-xl'>Você merece a melhor consultoria</h2>
          <h3 className='md:text-3xl text-2xl'>Conte com nossa equipe de especialistas para o que for preciso!</h3>
        </div>
        <CallButton />
      </div>
    </section>

  )
}
