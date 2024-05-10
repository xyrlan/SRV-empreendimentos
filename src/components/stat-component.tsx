'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function StatComponent() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 126, { duration: 10 });

    return animation.stop;
  }, []);
  return (
    <section className="">
      <div className="mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

          <p className="mt-4 text-gray-300 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
          </p>
        </div> */}

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-300">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-300">em novos negócios</dt>
              <dd className="text-4xl font-extrabold text-white md:text-5xl inline-flex gap-2">
                <span>R$</span>
                <motion.span className='w-24'>
                  {rounded}
                </motion.span>
                <span>milhões</span>
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-300">Estados de atuação</dt>

              <dd className="text-4xl font-extrabold text-white md:text-5xl">+ 5</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-300">negocios vendidos</dt>

              <dd className="text-4xl font-extrabold text-white md:text-5xl">+ 7</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

  )
}