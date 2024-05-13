'use client'
import Image from 'next/image'
import React from 'react'
import { CallButton } from './buttons/CallButton'
import { motion } from "framer-motion";


export default function CallSection() {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center py-24 px-6 gap-10'>
      <div className='flex md:flex-row flex-col justify-around items-center gap-20 max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}

          className='w-full '>
          <h2 className='text-3xl font-bold my-4'>Definir metas, dar forma ao futuro e chegar lá!</h2>
          <p className='my-6 dark:text-neutral-300'>Somos Especializados em Valuation e venda de Negócios e Indústrias
            Temos o Comprador certo para continuar o seu negócio
            para que você prospere em novos Desafios.
          </p>
          <div className='flex max-md:justify-center'>
            <CallButton />
          </div>
        </motion.div>
        <div className='relative h-[500px] md:h-[700px] w-full'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={'/destaque-barco.webp'} width={320} height={400} alt="destaque-barco" className='absolute top-0 left-0 rounded-tl-lg  max-sm:w-[200px]' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image src={'/destaque-mulher-estrada.jpg'} width={320} height={400} alt="destaque-mulher-estrada" className='absolute bottom-0 right-0  rounded-br-lg max-sm:w-[200px]' />
          </motion.div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-around items-center gap-20 max-w-7xl'>

        <motion.div className='md:w-2/3'
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src={'/destaque-fusao1.jpg.webp'} width={400} height={400} alt="destaque-barco" className='rounded-lg ' />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className='max-w-2xl'>
          <h2 className='text-3xl font-bold my-4'>Compre uma empresa sem o risco de começar do zero</h2>
          <p className='my-6 dark:text-neutral-300'>Comprar ou fundir com uma empresa já estabelecida traz sinergia e desenvolvimento estratégico. Mas para que isso aconteça dentro do esperado é preciso respeitar todas as etapas do processo com sigilo e segurança e, claro, contar com uma assessoria na condução desse processo.
          </p>
          <div className='flex max-md:justify-center'>
            <CallButton />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
