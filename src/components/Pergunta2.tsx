"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p2 : string
}

export function Pergunta2() {
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
            <h1>Pergunta 2</h1>

            <h3>Qual é a diferença entre 'let' e 'var' em JavaScript em relação ao escopo de variáveis?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P2" {...register("p2")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="1">A. Não há diferença entre eles.</option>
                    <option value="2">B. 'let' permite escopo global, enquanto 'var' é restrito a funções.</option>
                    <option value="3">C. 'var' é mais restrito que 'let'.</option>
                    <option value="4">D. 'let' tem escopo de bloco, 'var' tem escopo de função.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}