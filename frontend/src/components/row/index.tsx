import styles from './styles.module.scss';
interface IPropsPessoa {
    id: string
    name: {
        title: string,
        first: string,
        last: string
    },
    date: {
        day: string,
        month: string,
        year: string
    },
    gender: string,
    view: (id: string) => void
}

export function Row(props: IPropsPessoa) {

    return (
        <>
            <li>
                <ul className={`${styles.rowContainer} d-flex flex-row align-items-center justify-content-center`}>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        <span>
                            {`${props.name.title} ${props.name.first} ${props.name.last}`}
                        </span>
                    </li>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        <span>
                            {props.gender}
                        </span>
                    </li>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        <span>
                            {`${props.date.day}/${props.date.month}/${props.date.year}`}
                        </span>
                    </li>
                    <li className={`d-flex flex-row align-items-center justify-content-center`}>
                        <button className={`btn btn-light`} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => props.view(props.id)}>
                            View
                        </button>
                    </li>
                </ul>
            </li>
        </>
    );
}