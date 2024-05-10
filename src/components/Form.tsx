'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/utils/cn';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { PrimaryButton } from './buttons/PrimaryButton';

const schema = z.object({
  fullName: z.string().min(1, { message: "Nome completo é obrigatório" }),
  company: z.string().min(1, { message: "Nome da empresa é obrigatório" }),
  email: z.string().email({ message: "Endereço de email inválido" }).min(1, { message: "Email é obrigatório" }),
  phone: z.string().min(1, { message: "Telefone é obrigatório" })
});

export function Form() {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded p-4 md:p-8 shadow-input bg-slate-200 border border-slate-400 dark:border-slate-700 drop-shadow-lg dark:bg-slate-950 z-10">
      <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer>
          <Label htmlFor="fullName">Nome completo</Label>
          <div>
            <Input className={errors.fullName?.message ? 'ring-1 ring-red-500' : ''} id="fullName" {...register('fullName')} type="text" placeholder='Nome Completo' />
            <p className="text-red-500 md:text-sm text-xs">{errors.fullName?.message as any}</p>
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="company">Nome da empresa</Label>
          <div>
            <Input className={errors.company?.message ? 'ring-1 ring-red-500' : ''} id="company" {...register('company')} type="text" placeholder='Nome da empresa' />
            <p className="text-red-500 md:text-sm text-xs">{errors.company?.message as any}</p>
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <div>
            <Input id="email" className={errors.email?.message ? 'ring-1 ring-red-500' : ''} {...register('email')} type="email" placeholder='Ex: jonas.bardon@gmail.com' />
            <p className="text-red-500 md:text-sm text-xs">{errors.email?.message as any}</p>
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="phone">Telefone</Label>
          <div>
            <Input id="phone" className={errors.phone?.message ? 'ring-1 ring-red-500' : ''} {...register('phone')} type="text" placeholder='Telefone com DDD' />
            <p className="text-red-500 md:text-sm text-xs">{errors.phone?.message as any}</p>
          </div>
        </LabelInputContainer>
        <button type='submit' className='mt-7'>
          <PrimaryButton >
            Solicitar contato
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