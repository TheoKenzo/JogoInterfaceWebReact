"use client"

import { useState } from "react";
import { FormProvider } from "./components/FormContext";
import { FormStep } from "./components/FormStep";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className='flex justify-center items-center min-h-screen p-6 bg-gray-100'>
      <div className='max-w-2xl w-full border p-6 rounded-md bg-white'>
        <h1 className='text-x1 font-semibold text-center'>Sign Up Form</h1>
        <FormProvider>
          <FormStep />
        </FormProvider>
      </div>
    </div>
  )
}
