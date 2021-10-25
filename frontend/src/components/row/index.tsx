
import styles from './styles.module.scss';
interface IPropsPessoa {
    id: string
    nome: string,
    dataNascimento: string,
    genero: string,
}

export function Row(props: IPropsPessoa) {
    return (
        <>
            <li>
                <ul className={`${styles.rowContainer} d-flex flex-row align-items-center justify-content-center`}>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        {props.nome}
                    </li>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        {props.genero}
                    </li>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        {props.dataNascimento}
                    </li>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        <button className={`btn btn-light`}>
                            View
                        </button>
                    </li>
                </ul>
            </li>
        </>
    );
}