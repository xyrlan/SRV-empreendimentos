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
    <footer className="bg-secondary-100 border-t border-secondary-300 relative py-10">
      <Image src="/novoativo.svg" alt="logo" width={150} height={150} className='absolute h-1/2 max-sm:bottom-0 w-auto left-0 opacity-5 z-0' />
      <div className="mx-auto max-w-5xl px-4 py-4 lg:py:8 3xl:py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Logo width={150} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-secondary-700 font-medium">
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
              <p className='text-secondary-600 hover:text-primary-600 duration-300 transition-all font-semibold tracking-tight'>{item.name}</p>
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