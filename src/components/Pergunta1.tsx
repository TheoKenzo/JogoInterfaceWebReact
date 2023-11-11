"use client"

import { useFormState } from "./FormContext"
import { useForm } from "react-hook-form"

type TFormValues = {
    p1 : string
}

export function Pergunta1() {
    const { onHandleNext, setFormData, formData } = useFormState()
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData
    })

    function onHandleFormSubmit(data:any){
        setFormData((prevFormData) => ({...prevFormData, ...data}))
        onHandleNext()
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <h1>Pergunta 1</h1>

            <h3>Qual é a principal vantagem da minificação de código JavaScript?</h3>

            <div className="flex flex-col gap-1">
                <select id="P1" {...register("p1")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="1">A. Torna o código mais legível.</option>
                    <option value="2">B. Aumenta o tamanho do arquivo.</option>
                    <option value="3">C. Reduz o tempo de carregamento da página.</option>
                    <option value="4">D. Aumenta a facilidade de depuração.</option>
                </select>
            </div>

            <div className="flex justify-end">
                <button type="submit" className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}