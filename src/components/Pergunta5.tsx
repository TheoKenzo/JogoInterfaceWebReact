"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p5 : string
}

export function Pergunta5() {
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
            <h1>Pergunta 5</h1>

            <h3>Qual das seguintes práticas ajuda a reduzir a carga no DOM?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P5" {...register("p5")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="1">A. Utilizar loops aninhados.</option>
                    <option value="2">B. Acessar o DOM repetidamente.</option>
                    <option value="3">C. Utilizar variáveis globais.</option>
                    <option value="4">D. Utilizar variáveis locais e caches.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}