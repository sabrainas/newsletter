import {User} from "../types/User";

//definindo um tipo Error que é um objeto onde cada chave é uma string e o valor também
type Error = {
    [key: string]: string;
};

//função de validade que recebe um parâmetro do tipo User e retorna um objeto de erros (se houver alguns)
export const validate = (data: User) =>{
    //inicializa um objeto vazio para armazenar erros.
    const errors: Error = {};

    //verifica se o campo 'name' no objeto 'data' é falso (como undefined, null, string, vazia, etc...)
    if(!data.name){
        //se o campo 'name' for falso, adiciona uma mensagem de erro ao objeto 'errors' associada à chave 'name'. 
        errors["name"] = "O nome é obrigatório";
    }

    if(!data.email){
        //se o campo 'name' for falso, adiciona uma mensagem de erro ao objeto 'errors' associada à chave 'name'. 
        errors["email"] = "O email é obrigatório";
    }

    if(!data.agree){
        //se o campo 'name' for falso, adiciona uma mensagem de erro ao objeto 'errors' associada à chave 'name'. 
        errors["agree"] = "Você precisa concordar com os termos.";
    }

    return errors;
}