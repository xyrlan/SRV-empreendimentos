import Link from 'next/link'
import React from 'react'

const CopyCredits = () => {
  return (
    <div className='flex flex-col items-center my-6 gap-2'>
      <p className="text-xs text-secondary-500 text-center">&copy; 2024. Barao & Saraiva. Todos os direitos reservados.</p>
      <p className="text-xs text-secondary-500">Desenvolvido por <Link target='_blank' href={'https://xyrlan.com'} className='underline decoration-2 hover:decoration-3 hover:decoration-primary-500 hover:text-primary-600 duration-300 transition-all'>xyrlan</Link></p>
    </div>
  )
}

export default CopyCredits