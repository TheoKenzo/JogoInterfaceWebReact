import { EmailForm } from "./EmailForm";
import { useFormState } from "./FormContext";
import { PasswordForm } from "./PasswordForm";
import { UsernameForm } from "./UsernameForm";

export function FormStep(){
    const { step } = useFormState();

    switch(step){
        case 1: return <UsernameForm />

        case 2: return <EmailForm /> 

        case 3: return <PasswordForm />

        default: return null
    }
}