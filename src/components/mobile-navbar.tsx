import { navItems } from '@/lib/navItems'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { handleScrollToElement } from '@/utils/handleScrollToElement';
import { usePathname, useRouter } from 'next/navigation';
import { CallButton } from './buttons/CallButton';
import LinksComponents from './LinksComponents';
import CopyCredits from './CopyCredits';

function MobileNavbar({ setOpen }: { setOpen: any }) {

  const router = useRouter()
  const pathname = usePathname()
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.6, type: 'tween', ease: 'easeInOut' }}
      className="fixed min-h-screen h-full w-full pt-24 inset-0 z-50 bg-white border-t border-secondary-200">
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 + index * 0.1 } }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
          onClick={() => {
            if (item.link === '/' || item.link === '/faleconosco') {
              router.push(item.link)
              setOpen(false)
              return
            }
            if (pathname === '/') {
              handleScrollToElement(item.link)
              setOpen(false)
            } else {
              router.push(`/#${item.link}`, { scroll: true })
              setOpen(false)
            }
          }}
          className="text-center cursor-pointer font-semibold text-xl text-secondary-600 hover:text-primary-600 my-4 transition-colors duration-200"
        >
          {item.name}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
        className="absolute bottom-10 w-fit mx-4 brightness-125"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 + 4 * 0.1 } }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
          className='flex justify-center'>
          <CallButton />
        </motion.div>
        <LinksComponents />
        <CopyCredits />
      </motion.div>
    </motion.div>
  )
}

export default MobileNavbar