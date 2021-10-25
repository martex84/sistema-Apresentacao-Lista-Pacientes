import { Children, createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";
import { DadosPessoaContext, DadosPessoaContextFinal } from '../types'

type ReturnPessoaGet = {
    data: any;
    results: DadosPessoaContext[];
}

type ResultPessoaProvider = {
    children: ReactNode;
}

type ResultPessoaContext = {
    changePage: (page: string) => Promise<void>,
    user: DadosPessoaContextFinal[];
}

export const ResultContext = createContext({} as ResultPessoaContext);

export function ResultPessoaProvider(props: ResultPessoaProvider) {

    const [user, setUser] = useState<DadosPessoaContextFinal[]>([]);

    async function changePage(page: string) {
        const getPessoa = await api.get<ReturnPessoaGet>(`/?page=${page}&results=10&seed=abc&exc=login,registered,phone`);

        const returno: DadosPessoaContextFinal[] = [];

        getPessoa.data.results.map((value) => {

            if (value.id.value !== null) {

                let returnFinal: any = {};

                Object.entries(value).forEach(objeto => {
                    if (objeto[0] === "dob") {

                        const { date } = objeto[1] as any;

                        const datafinal = new Date(date);

                        let day = datafinal.getUTCDate().toString();

                        let month = (datafinal.getUTCMonth() + 1).toString();

                        returnFinal[objeto[0]] = {
                            date: {
                                day: day.length === 1 ? `0${day}` : day,
                                month: month.length === 1 ? `0${month}` : month,
                                year: datafinal.getUTCFullYear().toString()
                            }
                        }

                    }
                    else {
                        returnFinal[objeto[0]] = objeto[1]
                    }
                })

                returno.push(returnFinal);
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

