"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p8 : string
}

export function Pergunta8() {
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
            <h1>Pergunta 8</h1>

            <h3>Por que é preferível usar operações lógicas curtas em vez de longas em JavaScript?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P8" {...register("p8")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. Operações lógicas longas são mais fáceis de entender.</option>
                    <option value="B">B. Operações lógicas curtas podem introduzir erros.</option>
                    <option value="C">C. Operações lógicas longas são mais eficientes em termos de desempenho.</option>
                    <option value="D">D. Operações lógicas curtas podem melhorar a legibilidade e desempenho do código.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}