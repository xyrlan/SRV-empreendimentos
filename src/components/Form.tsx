'use client'
import React, { useState, useTransition } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/utils/cn';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { PrimaryButton } from './buttons/PrimaryButton';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';

const schema = z.object({
  nome: z.string().min(1, { message: "Nome completo é obrigatório" }),
  empresa: z.string().min(1, { message: "Nome da empresa é obrigatório" }),
  email: z.string().email({ message: "Endereço de email inválido" }).min(1, { message: "Email é obrigatório" }),
  telefone: z.string().min(1, { message: "Telefone é obrigatório" }),
  _next: z.string().optional(),
  _captcha: z.string().optional()
});

export function Form() {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: zodResolver(schema)
  });
  const router = useRouter()
  const [isLoading, startTransition] = useTransition()

  const onSubmit = async (data: any) => {
    startTransition(async () => {
      try {
        const response = await fetch('https://formsubmit.co/contato@srvempreendimentos.com.br', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (response.ok) {
          router.push('https://www.srvempreendimentos.com.br/thankyou')
        } else {
          console.error('Form submission error');
        }
      } catch (error) {
        console.error('Form submission error', error);
      }
    })
  };

  return (
    <div className="max-w-2xl w-full mx-auto rounded p-4 md:p-8 shadow-input bg-white border border-secondary-300 drop-shadow-lg z-10">
      <form className="my-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LabelInputContainer>
          <Label htmlFor="nome" className="text-secondary-700">Nome completo</Label>
          <div>
            <Input className={errors.nome?.message ? 'ring-1 ring-red-500' : ''} id="nome" {...register('nome')} type="text" placeholder='Nome Completo' />
            <p className="text-red-500 md:text-sm text-xs">{errors.nome?.message as any}</p>
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="empresa" className="text-secondary-700">Nome da empresa</Label>
          <div>
            <Input className={errors.empresa?.message ? 'ring-1 ring-red-500' : ''} id="empresa" {...register('empresa')} type="text" placeholder='Nome da empresa' />
            <p className="text-red-500 md:text-sm text-xs">{errors.empresa?.message as any}</p>
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email" className="text-secondary-700">Email</Label>
          <div>
            <Input id="email" className={errors.email?.message ? 'ring-1 ring-red-500' : ''} {...register('email')} type="email" placeholder='Ex: jonas.bardon@gmail.com' />
            <p className="text-red-500 md:text-sm text-xs">{errors.email?.message as any}</p>
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="telefone" className="text-secondary-700">Telefone</Label>
          <div>
            <Input id="telefone" className={errors.telefone?.message ? 'ring-1 ring-red-500' : ''} {...register('telefone')} type="text" placeholder='Telefone com DDD' />
            <p className="text-red-500 md:text-sm text-xs">{errors.telefone?.message as any}</p>
          </div>
        </LabelInputContainer>
        <input type="hidden" {...register('_captcha')} value="false" />
        <input type="hidden" name="_next" value="https://www.srvempreendimentos.com.br/thankyou" />
        <button type='submit' className='mt-7'>
          <PrimaryButton >
            {isLoading ? <Loader className='animate-spin' /> : 'Enviar contato'}
          </PrimaryButton>
        </button>
      </form>
    </div>
  );
};

const LabelInputContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full mb-4")}>
      {children}
    </div>
  );
};