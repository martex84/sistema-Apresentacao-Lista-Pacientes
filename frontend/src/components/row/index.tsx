
import styles from './styles.module.scss';
interface IPropsPessoa {
    id: string
    name: {
        title: string,
        first: string,
        last: string
    },
    date: string,
    gender: string,
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
                            {props.date}
                        </span>
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