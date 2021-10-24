import { VscGithub } from "react-icons/vsc"

import styles from "./styles.module.scss";

export function Footer() {
    return (
        <>
            <footer className={`${styles.footerContainer} d-flex align-items-center justify-content-center p-4`}>
                <span>
                    Desenvolvido por Martex -
                    <a href="">
                        <VscGithub size="25" />
                    </a>
                </span>
            </footer>
        </>
    );
}