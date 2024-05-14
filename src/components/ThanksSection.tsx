import { CheckCircle } from 'lucide-react'
import React from 'react'

function ThanksSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <CheckCircle className="w-20 h-20 text-green-500" />
        <h1 className="text-4xl font-bold text-center">Obrigado pelo contato!</h1>
        <p className="text-xl text-center">Em breve retornaremos.</p>
      </div>
    </section>
  )
}

export default ThanksSection