"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p6 : string
}

export function Pergunta6() {
    const { onHandleNext, onHandleBack, setFormData, formData } = useFormState()
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData
    });

    function onHandleFormSubmit(data:any){
        setFormData((prevFormData) => ({...prevFormData, ...data}))
        onHandleNext()
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <h1>Pergunta 6</h1>

            <h3>O que é caching em JavaScript?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P6" {...register("p6")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. Uma técnica para deixar o código mais lento.</option>
                    <option value="B">B. Armazenar dados temporariamente para reduzir a necessidade de cálculos repetitivos ou acessos a recursos externos.</option>
                    <option value="C">C. Uma prática para minificar o código.</option>
                    <option value="D">D. A técnica de aumentar o tamanho dos arquivos JavaScript.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}