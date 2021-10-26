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
    changeModel: () => void,
    getModel: () => boolean,
    user: DadosPessoaContextFinal[];
}

export const ResultContext = createContext({} as ResultPessoaContext);

export function ResultPessoaProvider(props: ResultPessoaProvider) {

    const [user, setUser] = useState<DadosPessoaContextFinal[]>([]);

    const [model, setModel] = useState<boolean>(false);

    async function changePage(page: string) {
        const getPessoa = await api.get<ReturnPessoaGet>(`/?page=${page}&results=10&seed=abc&exc=login,registered,phone`);

        const returno: DadosPessoaContextFinal[] = [];

        getPessoa.data.results.map((value) => {

            if (value.id.value !== null) {

                let returnFinal: any = {};

                let cont: number = 0;

                Object.entries(value).forEach(objeto => {

                    cont++;

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

                    if (Object.keys(value).length === cont) {
                        returnFinal['url'] = `http://localhost:3000/?page=${page}&id=${value.id.value}`
                    }
                })

                returno.push(returnFinal);
            }

        })

        setUser(returno);
    }

    function changeModel() {
        setModel(
            model === true ? false : true
        )
    }

    function getModel() {
        return model;
    }

    useEffect(() => {
        if (!!user) {
            changePage("1")
        }
    }, [])

    return (
        <ResultContext.Provider value={{ user, changePage, getModel, changeModel }}>
            {props.children}
        </ResultContext.Provider>
    );
}

