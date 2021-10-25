import { Children, createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";

type IDadosPessoaContext = {
    nome: string,
    email: string,
    genero: string,
    dataNascimento: string,
    telefone: string,
    nacionalidade: string,
    endereco: string,
    id: string,
    url: string
}

type ResultPessoaProvider = {
    children: ReactNode;
}

type ResultPessoaContext = {
    changePage: () => IDadosPessoaContext[]
}

export const ResultContext = createContext(null);

export function ResultPessoaProvider(props: ResultPessoaProvider) {

    const [user, setUser] = useState<IDadosPessoaContext[]>([]);

    async function getPessoa(page: string) {
        const retorno = await api.get(`/?page=${page}&result=10&seed=abc&exc=login,registered`)

        console.log(retorno);
    }

    useEffect(() => {
        if (!user) {
            getPessoa("1")
        }
    }, [])

    return (
        <ResultContext.Provider value={null}>
            {props.children}
        </ResultContext.Provider>
    );
}

