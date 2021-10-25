export type DadosPessoaContext = {
    name: {
        title: string,
        first: string,
        last: string
    },
    email: string,
    gender: string,
    dob: {
        date: string
    },
    cell: string,
    nat: string,
    location: string,
    id: {
        value: string
    },
    url: string
}

export type DadosPessoaContextFinal = {
    name: {
        title: string,
        first: string,
        last: string
    },
    email: string,
    gender: string,
    dob: {
        date: {
            day: string,
            month: string,
            year: string
        }
    },
    cell: string,
    nat: string,
    location: string,
    id: {
        value: string
    },
    url: string
}