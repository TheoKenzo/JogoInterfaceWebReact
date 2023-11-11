"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"
import { useState } from "react"

type TFormValues = {
    password : string
}

export function PasswordForm() {
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
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="password" className="h-11 px-4 border rounded-md" {...register("password")} required />
            </div>
            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Back</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Submit</button>
            </div>
        </form>
    )
}