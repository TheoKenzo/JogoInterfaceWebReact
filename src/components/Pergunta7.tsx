"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p7 : string
}

export function Pergunta7() {
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
            <h1>Pergunta 7</h1>

            <h3>Qual é a importância de evitar loops aninhados em JavaScript para otimização?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P7" {...register("p7")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. Torna o código mais legível.</option>
                    <option value="B">B. Reduz a complexidade do código.</option>
                    <option value="C">C. Melhora o desempenho, já que loops aninhados podem ser mais lentos.</option>
                    <option value="D">D. Aumenta a eficiência na manipulação do DOM.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}