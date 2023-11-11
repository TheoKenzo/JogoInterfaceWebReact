"use client"

import { useFormState } from "./FormContext"
import { useForm } from "react-hook-form"

type TFormValues = {
    username : string
}

export function UsernameForm() {
    const { onHandleNext, setFormData, formData } = useFormState()
    const { register, handleSubmit } = useForm<TFormValues>({
        defaultValues: formData
    })

    function onHandleFormSubmit(data:any){
        setFormData((prevFormData) => ({...prevFormData, ...data}))
        onHandleNext()
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="username" className="h-11 px-4 border rounded-md" {...register("username")} required />
            </div>
            <div className="flex justify-end">
                <button type="submit" className="h-11 px-6 bg-black text-white rounded-md">Next</button>
            </div>
        </form>
    )
}