"use client"

import { useState } from "react";
import { FormProvider } from "../components/FormContext";
import { FormStep } from "../components/FormStep";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <>
      <header>
        <h1>Jogo: Jogo</h1>
        <h1>Integrantes: Ana Cristina Thiersch da Cruz, Aliny Alves Dutra, Iago Clemilson Silva Santos e Theo Kenzo de Araújo</h1>
        <h1>Data: 11/11/2023</h1>
      </header>

      <div className='flex justify-center items-center min-h-screen p-6 bg-gray-100'>
        <div className='max-w-2xl w-full border p-6 rounded-md bg-white'>
          <h1 className='text-x1 font-semibold text-center'>Boas práticas de programação em JavaScript</h1>
          <FormProvider>
            <FormStep />
          </FormProvider>
        </div>
      </div>

      <footer>
        <h1>Instituto Federal do Triângulo Mineiro Campus Avançado Uberaba Parque Tecnológico</h1>
        <h1>Curso: Análise e Desenvolvimento de Sistemas</h1>
        <h1>Disciplina: Tecnologias para Interfaces de Aplicações Web</h1>
      </footer>
    </>
  )
}
