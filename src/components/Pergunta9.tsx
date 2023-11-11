"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p9 : string
}

export function Pergunta9() {
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
            <h1>Pergunta 9</h1>

            <h3>Qual é o benefício de utilizar 'const' em vez de 'let' para declaração de variáveis em JavaScript?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P9" {...register("p9")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. 'const' permite a reatribuição de valores, enquanto 'let' não.</option>
                    <option value="B">B. 'const' possui escopo de bloco, enquanto 'let' possui escopo de função.</option>
                    <option value="C">C. 'const' é usado para variáveis que não terão seus valores alterados, o que pode prevenir erros acidentais.</option>
                    <option value="D">D. 'let' é mais recomendado por ser mais flexível que 'const'.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}