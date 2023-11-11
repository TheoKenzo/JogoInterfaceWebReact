import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface TFormData{
    p1:string
    p2:string
    p3:string
    p4:string
    p5:string
    p6:string
    p7:string
    p8:string
    p9:string
    p10:string
}

interface IFormContext{
    onHandleNext: () => void
    onHandleBack: () => void
    step: number
    formData: TFormData
    setFormData: Dispatch<SetStateAction<TFormData>>
}

const FormContext = createContext<IFormContext>({
    onHandleBack: () => {},
    onHandleNext: () => {},
    step: 1,
    formData: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
        p10: "",
    },
    setFormData: () => {},
})

interface IProps{
    children: ReactNode
}

export function FormProvider({children}:IProps){
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<TFormData>({
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
        p10: "",
    })

    function onHandleNext(){
        setStep((prevValue) => prevValue + 1)
    }

    function onHandleBack(){
        setStep((prevValue) => prevValue - 1)
    }

    return (
        <FormContext.Provider value={{ onHandleBack, onHandleNext, step, formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export function useFormState(){
    return useContext(FormContext);
}