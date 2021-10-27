
import { useContext } from 'react'

import { DadosPessoaContextFinal } from "../../types";

import { ResultContext } from '../../context/contextApiResultPacients';

import styles from './styles.module.scss'

type TConfigModal = {
    pessoa: DadosPessoaContextFinal,
    changeModal: {
        showModal: boolean;
        setModal: (valor: boolean) => void;
    }
}

export function Modal(props: TConfigModal) {

    const contextApi = useContext(ResultContext);

    function alterarDisplay() {
        localStorage.setItem("SALPessoa", JSON.stringify({
            model: false,
            show: false
        }))

        contextApi.changeModel("", {});

        const hrefLocation = window.location.href.split("&id=")[0]

        history.pushState({}, "", `${hrefLocation}`);

    }

    return (
        <>
            <div className={`${styles.modal} ${contextApi.getModel().classe} modal fade`} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" style={contextApi.getModel().display}>
                <div className="modal-dialog">
                    <div className={`${styles.containerModal} modal-content`}>
                        <div className="modal-header">
                            <div className={`${styles.containerImagem}`}>
                                <img src={props.pessoa.picture.large} alt="Imagem Paciente" />
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => alterarDisplay()}></button>
                        </div>
                        <div className={`${styles.containerBody} modal-body`}>
                            <div>
                                <span>
                                    Id:
                                </span>
                                <span>
                                    {props.pessoa.id.value}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Nome:
                                </span>
                                <span>
                                    {`${props.pessoa.name.title} ${props.pessoa.name.first} ${props.pessoa.name.last}`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Email:
                                </span>
                                <span>
                                    {props.pessoa.email}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Gênero:
                                </span>
                                <span>
                                    {props.pessoa.gender}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Data de Nascimento:
                                </span>
                                <span>
                                    {`${props.pessoa.dob.date.day}/${props.pessoa.dob.date.month}/${props.pessoa.dob.date.year}`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Telefone:
                                </span>
                                <span>
                                    {props.pessoa.cell}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Nacionalidade:
                                </span>
                                <span>
                                    {props.pessoa.nat}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Endereço:
                                </span>
                                <span>
                                    {`${props.pessoa.location.street.name
                                        } - ${props.pessoa.location.street.number}`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Cidade:
                                </span>
                                <span>
                                    {`${props.pessoa.location.city
                                        }`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Estado:
                                </span>
                                <span>
                                    {`${props.pessoa.location.state
                                        }`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    País:
                                </span>
                                <span>
                                    {`${props.pessoa.location.country
                                        }`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Link:
                                </span>
                                <span>
                                    {props.pessoa.url}
                                </span>
                            </div>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}