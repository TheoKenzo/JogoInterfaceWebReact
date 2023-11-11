"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p4 : string
}

export function Pergunta4() {
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
            <h1>Pergunta 4</h1>

            <h3>Qual é a importância de utilizar event delegation para lidar com eventos em JavaScript?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P4" {...register("p4")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. Aumenta o número de eventos no código.</option>
                    <option value="B">B. Torna o código mais lento.</option>
                    <option value="C">C. Reduz a necessidade de anexar eventos a vários elementos.</option>
                    <option value="D">D. Não afeta o desempenho do código.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}