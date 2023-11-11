"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"
import { useState } from "react"

type TFormValues = {
    p10 : string
}

export function Pergunta10() {
    const [ isCreated, setCreated ] = useState(false)
    const { onHandleBack, setFormData, formData } = useFormState()
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData
    });

    function onHandleFormSubmit(data:any){
        setFormData((prevFormData) => ({...prevFormData, ...data}))
        setCreated(true)
    }

    return isCreated ? (
        <div>
            <h1>Account Created SuccessFully</h1>
            <pre>{JSON.stringify(formData)}</pre>
        </div>
    ) : (
        <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <h1>Pergunta 10</h1>

            <h3>Qual é a razão para utilizar operações assíncronas em JavaScript?</h3>

            <div className="flex flex-col gap-1">
                <select id="P10" {...register("p10")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="1">A. Para tornar o código mais previsível.</option>
                    <option value="2">B. Para aumentar a complexidade do código.</option>
                    <option value="3">C. Para lidar com tarefas que podem levar tempo sem bloquear a execução do restante do código.</option>
                    <option value="4">D. Para reduzir a eficiência do programa.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Enviar</button>
            </div>
        </form>
    )
}