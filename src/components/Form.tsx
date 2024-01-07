import { useState, FormEvent } from "react";
import {User} from "../types/User";
import {validate} from "../utils/validate";

const Form = () =>{
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    //estado para armazenar erros de validação
    const [errors, setErrors] = useState<User | null>(null);

    //função para lidar com a submissão do formulário.
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); //evita o comportamento padrão de submissão do formulário

        setErrors(null);

        const data: User = {
            name,
            email,
            agree
        };

        const validateErrors = validate(data);

        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors);
            return;
        }

        setName("")
        setEmail("")
        setAgree(false)

        alert("Obrigado por se inscrever!")
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="nome"> Nome</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placehlder:text-stone-400" />
            </div>
            {errors?.name && (
                <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
            )}
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placehlder:text-stone-400" />
            </div> 
            {errors?.email && (
                <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
            )}

            <div className="flex flex-col">
                <a href="#" className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 items-center">
                    <input checked={agree} onChange={(e) => setAgree(e.target.checked)} type="checkbox"/>
                    <label className="text-sm" htmlFor="agree">Concordo com os termos.</label>
                </div>
                {errors?.agree && (
                    <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
                )}
            </div>

            <button className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"  type="submit">Cadastrar</button>

        </form>
    )
}

export default Form