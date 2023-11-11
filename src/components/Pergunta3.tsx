"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"

type TFormValues = {
    p3 : string
}

export function Pergunta3() {
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
            <h1>Pergunta 3</h1>

            <h3>Por que é recomendado colocar os scripts no final do corpo HTML?</h3>
            
            <div className="flex flex-col gap-1">
                <select id="P3" {...register("p3")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. Para impedir que o navegador carregue os scripts.</option>
                    <option value="B">B. Melhora a percepção de velocidade para o usuário.</option>
                    <option value="C">C. Para bloquear o carregamento de outros elementos da página.</option>
                    <option value="D">D. Não há benefício em relação à localização dos scripts.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Próximo</button>
            </div>
        </form>
    )
}