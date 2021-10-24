

interface PropsPessoa {
    nome: string,
    email: string,
    genero: string,
}

export function Row(props: PropsPessoa) {
    return (
        <>
            <li>
                <ul>
                    <li>
                        {props.nome}
                    </li>
                </ul>
            </li>
        </>
    );
}