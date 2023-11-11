import { useFormState } from "./FormContext";
import { Pergunta1 } from "./Pergunta1";
import { Pergunta2 } from "./Pergunta2";
import { Pergunta3 } from "./Pergunta3";
import { Pergunta4 } from "./Pergunta4";
import { Pergunta5 } from "./Pergunta5";
import { Pergunta6 } from "./Pergunta6";
import { Pergunta7 } from "./Pergunta7";
import { Pergunta8 } from "./Pergunta8";
import { Pergunta9 } from "./Pergunta9";
import { Pergunta10 } from "./Pergunta10";

export function FormStep(){
    const { step } = useFormState();

    switch(step){
        case 1: return <Pergunta1 />

        case 2: return <Pergunta2 /> 

        case 3: return <Pergunta3 />

        case 4: return <Pergunta4 />

        case 5: return <Pergunta5 />

        case 6: return <Pergunta6 />

        case 7: return <Pergunta7 />

        case 8: return <Pergunta8 />

        case 9: return <Pergunta9 />

        case 10: return <Pergunta10 />

        default: return null
    }
}