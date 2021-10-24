import { VscAccount } from "react-icons/vsc"

import styles from "./styles.module.scss";

export function Header() {
    return (
        <>
            <header className={`${styles.headerContainer} d-flex flex-row justify-content-between align-items-center`}>
                <div className={styles.containerSpanLogin}>
                    <span>
                        Pharma Inc
                    </span>
                </div>
                <div className={`${styles.containerUsuario}`}>
                    <VscAccount size="45" />
                </div>
            </header>
        </>
    );
}