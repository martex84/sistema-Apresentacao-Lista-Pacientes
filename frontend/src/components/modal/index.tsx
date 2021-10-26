
import { VscAccount } from 'react-icons/vsc'

import { DadosPessoaContextFinal } from "../../types"

export function Modal(props: DadosPessoaContextFinal) {
    return (
        <>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <img src={props.picture.large} alt="Imagem Paciente" />
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
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
                                    Genêro:
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
                                    Endereço
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