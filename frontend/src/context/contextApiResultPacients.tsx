import { Children, createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";
import { DadosPessoaContext } from '../types'

type ReturnPessoaGet = {
    data: any;
    results: DadosPessoaContext[];
}

type ResultPessoaProvider = {
    children: ReactNode;
}

type ResultPessoaContext = {
    changePage: (page: string) => Promise<void>,
    user: DadosPessoaContext[];
}

export const ResultContext = createContext({} as ResultPessoaContext);

export function ResultPessoaProvider(props: ResultPessoaProvider) {

    const [user, setUser] = useState<DadosPessoaContext[]>([]);

    async function changePage(page: string) {
        const getPessoa = await api.get<ReturnPessoaGet>(`/?page=${page}&results=10&seed=abc&exc=login,registered,phone`);

        const returno: DadosPessoaContext[] = [];

        getPessoa.data.results.map((value) => {

            if (value.id.value !== null) {
                returno.push(value);
            }
        })

        setUser(returno);
    }

    useEffect(() => {
        if (!!user) {
            changePage("1")
        }
    }, [])

    return (
        <ResultContext.Provider value={{ user, changePage }}>
            {props.children}
        </ResultContext.Provider>
    );
}

