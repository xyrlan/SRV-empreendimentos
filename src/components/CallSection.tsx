'use client'
import Image from 'next/image'
import React from 'react'
import { CallButton } from './buttons/CallButton'
import { motion } from "framer-motion";

export default function CallSection() {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center py-24 px-6 gap-16 bg-gradient-to-b from-white to-secondary-50'>
      <div className='flex md:flex-row flex-col justify-around items-center gap-20 max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className='w-full space-y-6'>
          <div className="space-y-4">
            <h2 className='text-4xl md:text-5xl font-bold text-secondary-800 leading-tight'>
              Definir metas, dar forma ao futuro e{' '}
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                chegar lá!
              </span>
            </h2>
            <p className='text-lg text-secondary-600 leading-relaxed max-w-2xl'>
              Somos Especializados em Valuation, venda de Negócios e Indústrias.
              Temos o comprador certo para continuar o seu negócio
              proporcionando prosperidade em novos desafios.
            </p>
          </div>
          <div className='flex max-md:justify-center'>
            <CallButton />
          </div>
        </motion.div>
        <div className='relative h-[500px] md:h-[700px] w-full'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-tl-lg"></div>
            <Image
              src={'/destaque-barco.webp'}
              width={320}
              height={400}
              alt="destaque-barco"
              className='absolute top-0 left-0 rounded-tl-lg max-sm:w-[200px] shadow-2xl hover:scale-105 transition-transform duration-300'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-primary-500/20 to-transparent rounded-br-lg"></div>
            <Image
              src={'/destaque-mulher-estrada.jpg'}
              width={320}
              height={400}
              alt="destaque-mulher-estrada"
              className='absolute top-40 right-0 rounded-br-lg max-sm:w-[200px] shadow-2xl hover:scale-105 transition-transform duration-300'
            />
          </motion.div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-around items-center gap-20 max-w-7xl'>
        <motion.div
          className='md:w-2/3 relative'
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-lg"></div>
          <Image
            src={'/destaque-fusao1.jpg.webp'}
            width={400}
            height={400}
            alt="destaque-fusao"
            className='rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className='max-w-2xl space-y-6'>
          <div className="space-y-4">
            <h2 className='text-4xl md:text-5xl font-bold text-secondary-800 leading-tight'>
              Compre uma empresa sem o risco de{' '}
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                começar do zero
              </span>
            </h2>
            <p className='text-lg text-secondary-600 leading-relaxed'>
              Comprar ou fundir com uma empresa já estabelecida traz sinergia e desenvolvimento estratégico. Mas para que isso aconteça dentro do esperado é preciso respeitar todas as etapas do processo com sigilo e segurança e, claro, contar com uma assessoria na condução desse processo.
            </p>
          </div>
          <div className='flex max-md:justify-center'>
            <CallButton />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
