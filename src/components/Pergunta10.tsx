"use client"

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext"
import { useState } from "react"

type TFormValues = {
    p10 : string
}

export function Pergunta10() {
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
        <div className="flex flex-col gap-4">
            <h1 className="text-lg">Respostas</h1>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 1: Qual é a principal vantagem da minificação de código JavaScript?</h2>

                <p>A. Torna o código mais legível.</p>
                <p>B. Aumenta o tamanho do arquivo.</p>
                <strong>C. Reduz o tempo de carregamento da página.</strong>
                <p>D. Aumenta a facilidade de depuração.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p1)}</p>
            </section>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 2: Qual é a diferença entre 'let' e 'var' em JavaScript em relação ao escopo de variáveis?</h2>

                <p>A. Não há diferença entre eles.</p>
                <p>B. 'let' permite escopo global, enquanto 'var' é restrito a funções.</p>
                <p>C. 'var' é mais restrito que 'let'.</p>
                <strong>D. 'let' tem escopo de bloco, 'var' tem escopo de função.</strong>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p2)}</p>
            </section>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 3: Por que é recomendado colocar os scripts no final do corpo HTML?</h2>

                <p>A. Para impedir que o navegador carregue os scripts.</p>
                <strong>B. Melhora a percepção de velocidade para o usuário.</strong>
                <p>C. Para bloquear o carregamento de outros elementos da página.</p>
                <p>D. Não há benefício em relação à localização dos scripts.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p3)}</p>
            </section>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 4: Qual é a importância de utilizar event delegation para lidar com eventos em JavaScript?</h2>

                <p>A. Aumenta o número de eventos no código.</p>
                <p>B. Torna o código mais lento.</p>
                <strong>C. Reduz a necessidade de anexar eventos a vários elementos.</strong>
                <p>D. Não afeta o desempenho do código.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p4)}</p>
            </section>
            
            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 5: Qual das seguintes práticas ajuda a reduzir a carga no DOM?</h2>

                <p>A. Utilizar loops aninhados.</p>
                <p>B. Acessar o DOM repetidamente.</p>
                <p>C. Utilizar variáveis globais.</p>
                <strong>D. Utilizar variáveis locais e caches.</strong>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p5)}</p>
            </section>
             
            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 6: O que é caching em JavaScript?</h2>

                <p>A. Uma técnica para deixar o código mais lento.</p>
                <strong>B. Armazenar dados temporariamente para reduzir a necessidade de cálculos repetitivos ou acessos a recursos externos.</strong>
                <p>C. Uma prática para minificar o código.</p>
                <p>D. A técnica de aumentar o tamanho dos arquivos JavaScript.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p6)}</p>
            </section>
             
            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 7: Qual é a importância de evitar loops aninhados em JavaScript para otimização?</h2>

                <p>A. Torna o código mais legível.</p>
                <p>B. Reduz a complexidade do código.</p>
                <strong>C. Melhora o desempenho, já que loops aninhados podem ser mais lentos.</strong>
                <p>D. Aumenta a eficiência na manipulação do DOM.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p7)}</p>
            </section>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 8: Por que é preferível usar operações lógicas curtas em vez de longas em JavaScript?</h2>

                <p>A. Operações lógicas longas são mais fáceis de entender.</p>
                <p>B. Operações lógicas curtas podem introduzir erros.</p>
                <p>C. Operações lógicas longas são mais eficientes em termos de desempenho.</p>
                <strong>D. Operações lógicas curtas podem melhorar a legibilidade e desempenho do código.</strong>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p8)}</p>
            </section>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 9: Qual é o benefício de utilizar 'const' em vez de 'let' para declaração de variáveis em JavaScript?</h2>

                <p>A. 'const' permite a reatribuição de valores, enquanto 'let' não.</p>
                <p>B. 'const' possui escopo de bloco, enquanto 'let' possui escopo de função.</p>
                <strong>C. 'const' é usado para variáveis que não terão seus valores alterados, o que pode prevenir erros acidentais.</strong>
                <p>D. 'let' é mais recomendado por ser mais flexível que 'const'.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p9)}</p>
            </section>

            <hr />

            <section className="flex flex-col gap-2">
                <h2 className="text-lg">Pergunta 10: Qual é a razão para utilizar operações assíncronas em JavaScript?</h2>

                <p>A. Para tornar o código mais previsível.</p>
                <p>B. Para aumentar a complexidade do código.</p>
                <strong>C. Para lidar com tarefas que podem levar tempo sem bloquear a execução do restante do código.</strong>
                <p>D. Para reduzir a eficiência do programa.</p>

                <p className="text-blue-700">Sua resposta: {JSON.stringify(formData.p10)}</p>
            </section>
            
        </div>
    ) : (
        <form className="space-y-6" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <h1>Pergunta 10</h1>

            <h3>Qual é a razão para utilizar operações assíncronas em JavaScript?</h3>

            <div className="flex flex-col gap-1">
                <select id="P10" {...register("p10")} required>
                    <option value="">Escolha uma opção</option>
                    <option value="A">A. Para tornar o código mais previsível.</option>
                    <option value="B">B. Para aumentar a complexidade do código.</option>
                    <option value="C">C. Para lidar com tarefas que podem levar tempo sem bloquear a execução do restante do código.</option>
                    <option value="D">D. Para reduzir a eficiência do programa.</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <button type="button" onClick={ onHandleBack } className="h-11 px-6 bg-black text-white rounded-md">Voltar</button>
                <button className="h-11 px-6 bg-black text-white rounded-md">Enviar</button>
            </div>
        </form>
    )
}