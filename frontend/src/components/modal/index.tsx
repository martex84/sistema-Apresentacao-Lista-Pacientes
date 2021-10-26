
import { VscAccount } from 'react-icons/vsc'

import { DadosPessoaContextFinal } from "../../types"

import styles from './styles.module.scss'

export function Modal(props: DadosPessoaContextFinal) {
    return (
        <>
            <div className={`${styles.modal} modal fade`} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`${styles.containerModal} modal-content`}>
                        <div className="modal-header">
                            <div className={`${styles.containerImagem}`}>
                                <img src={props.picture.large} alt="Imagem Paciente" />
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className={`${styles.containerBody} modal-body`}>
                            <div>
                                <span>
                                    Id:
                                </span>
                                <span>
                                    {props.id.value}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Nome:
                                </span>
                                <span>
                                    {`${props.name.title} ${props.name.first} ${props.name.last}`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Email:
                                </span>
                                <span>
                                    {props.email}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Gênero:
                                </span>
                                <span>
                                    {props.gender}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Data de Nascimento:
                                </span>
                                <span>
                                    {`${props.dob.date.day}/${props.dob.date.month}/${props.dob.date.year}`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Telefone:
                                </span>
                                <span>
                                    {props.cell}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Nacionalidade:
                                </span>
                                <span>
                                    {props.nat}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Endereço:
                                </span>
                                <span>
                                    {`${props.location.street.name
                                        } - ${props.location.street.number}`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Cidade:
                                </span>
                                <span>
                                    {`${props.location.city
                                        }`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Estado:
                                </span>
                                <span>
                                    {`${props.location.state
                                        }`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    País:
                                </span>
                                <span>
                                    {`${props.location.country
                                        }`}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Link:
                                </span>
                                <span>
                                    {props.url}
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