import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';

import { Top, Title, AddTask, Container } from './styles';

export default function Tasks() {
    return (
        <>
            <Top>
                <Title>Tarefas</Title>
                <AddTask>
                    <Link to="/new-task"> Adicionar</Link>
                </AddTask>
            </Top>
            <Container>
                <ul>
                    <li>
                        <MdCheck />
                        <div>
                            <strong>
                                Levantar documentos necessários para o processo
                            </strong>
                            <p className="lawsuit">Ação de cobrança</p>
                            <p>12/10/2019 - 20/12/2019</p>
                            <div>
                                <a href="#/">Dr. Deltan</a>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li>
                        <MdCheck />
                        <div>
                            <strong>
                                Levantar documentos necessários para o processo
                            </strong>
                            <p className="lawsuit">Ação de cobrança</p>
                            <p>Conferir se está tudo ok.</p>
                            <p>12/10/2019 - 20/12/2019</p>
                            <div>
                                <a href="#/">Dr. Deltan</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </Container>
        </>
    );
}
