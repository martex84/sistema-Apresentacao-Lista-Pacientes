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
    location: {
        street: {
            number: string,
            name: string
        },
        city: string,
        state: string,
        country: string
    },
    id: {
        value: string
    },
    picture: {
        large: string
    }
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
    location: {
        street: {
            number: string,
            name: string
        },
        city: string,
        state: string,
        country: string
    },
    id: {
        value: string
    },
    picture: {
        large: string
    },
    url: string
}