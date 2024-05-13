'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function StatComponent() {
  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    const animation = animate(count, 126, { duration: 10 });
    const animation2 = animate(count2, 5, { duration: 3 });
    const animation3 = animate(count3, 7, { duration: 3 });
    return () => { 
      animation.stop();
      animation2.stop();
      animation3.stop();
    }
  }, []);
  return (

      <div className="mx-auto px-4 mt-12 sm:px-6 lg:px-8">
        <div className="md:mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:divide-x sm:divide-gray-300">
            <div className="flex flex-col px-4 py-2 md:py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-300">em negócios</dt>
              <dd className="text-4xl font-extrabold text-white lg:text-5xl inline-flex gap-2">
                <span>R$</span>
                <motion.span className='w-24'>
                  {rounded}
                </motion.span>
                <span>milhões</span>
              </dd>
            </div>

            <div className="flex flex-col px-4 py-2 md:py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-300">Estados de atuação</dt>

              <dd className="text-4xl font-extrabold text-white md:text-5xl">
                <span>+</span>
                <motion.span>{rounded2}</motion.span>
              </dd>
            </div>

            <div className="flex flex-col px-4 py-2 md:py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-300">negocios vendidos</dt>

              <dd className="text-4xl font-extrabold text-white md:text-5xl">
                <span>+</span>
                <motion.span>{rounded3}</motion.span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

  )
}