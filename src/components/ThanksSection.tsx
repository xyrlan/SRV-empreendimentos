import { CheckCircle } from 'lucide-react'
import React from 'react'

function ThanksSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <CheckCircle className="w-20 h-20 text-primary-500" />
        <h1 className="text-4xl font-bold text-center text-secondary-800">Obrigado pelo contato!</h1>
        <p className="text-xl text-center text-secondary-600">Em breve retornaremos.</p>
      </div>
    </section>
  )
}

export default ThanksSection