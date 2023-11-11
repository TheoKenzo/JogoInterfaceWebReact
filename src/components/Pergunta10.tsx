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
        <div className="flex flex-col gap-4">
            <h1 className="text-lg">Respostas</h1>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 1: Qual é a principal vantagem da minificação de código JavaScript?</h2>

                <p>A. Torna o código mais legível.</p>
                <p>B. Aumenta o tamanho do arquivo.</p>
                <strong>C. Reduz o tempo de carregamento da página.</strong>
                <p>D. Aumenta a facilidade de depuração.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p1)}</p>
            </section>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 1: Qual é a principal vantagem da minificação de código JavaScript?</h2>

                <p>A. Torna o código mais legível.</p>
                <p>B. Aumenta o tamanho do arquivo.</p>
                <strong>C. Reduz o tempo de carregamento da página.</strong>
                <p>D. Aumenta a facilidade de depuração.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p1)}</p>
            </section>
            
        </div>
    ) : (
        <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <h1>Pergunta 10</h1>

            <h3>Qual é a razão para utilizar operações assíncronas em JavaScript?</h3>

            <div className="flex flex-col gap-1">
                <select id="P10" {...register("p10")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. Para tornar o código mais previsível.</option>
                    <option value="B">B. Para aumentar a complexidade do código.</option>
                    <option value="C">C. Para lidar com tarefas que podem levar tempo sem bloquear a execução do restante do código.</option>
                    <option value="D">D. Para reduzir a eficiência do programa.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Enviar</button>
            </div>
        </form>
    )
}