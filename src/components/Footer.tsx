'use client'
import Image from 'next/image'
import React from 'react'


import CopyCredits from './CopyCredits'
import { CallButton } from './buttons/CallButton'
import { handleScrollToElement } from '@/utils/handleScrollToElement'
import LinksComponents from './LinksComponents'
import Logo from './Logo'
import { useRouter } from 'next/navigation'

const Footer = () => {

  const navItems = [
    { id: 1, name: 'Início', href: '/' },
    { id: 3, name: 'Serviços', href: 'servicos' },
    { id: 2, name: 'Sobre', href: 'about' },
    { id: 4, name: 'Contato', href: '/faleconosco' },
  ]

  const router = useRouter()

  return (
    <footer className=" dark:bg-slate-950 bg-gray-200 border-t border-slate-400 dark:border-slate-700 relative bg-opacity-80 py-10">
      <Image src="/ativo4branco.svg" alt="logo" width={150} height={150} className='absolute h-1/2 max-sm:bottom-0 w-auto left-0 opacity-10  z-0 invisible dark:visible' />
      <Image src="/ativo4.svg" alt="logo" width={150} height={150} className='absolute h-1/2 max-sm:bottom-0  w-auto left-0 opacity-10 dark:invisible visible ' />
      <div className="mx-auto max-w-5xl px-4 py-4 lg:py:8 3xl:py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Logo width={150} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-700 font-medium">
          Consultoria Empresarial dedicada ao mercado de estratégia, finanças corporativas e análises de mercado.
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {navItems.map((item) => (
            <li key={item.id} onClick={() => {
              if (item.id === 4 || item.id === 1) {
                router.push(item.href)
              }
              handleScrollToElement(item.href)
            }} className='select-none cursor-pointer'>
              <p className='dark:text-neutral-50 text-neutral-600 dark:hover:text-slate-400 hover:text-neutral-500 duration-300 transition-all font-semibold tracking-tight  '>{item.name}</p>
            </li>
          ))}
          <li>
            <CallButton />
          </li>
        </ul>

        <LinksComponents />
        <CopyCredits />
      </div>
    </footer>
  )
}

export default Footer