import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import { Top, Title, AddContract, Scroll, Container } from './styles';

export default function Contracts() {
    return (
        <>
            <Top>
                <Title>Contratos</Title>
                <AddContract>
                    <Link to="/new-contract">Adicionar</Link>
                </AddContract>
            </Top>

            <Container>
                <form autoComplete="off">
                    <input type="text" placeholder="Encontre um contrato" />
                    <button type="submit">
                        <MdSearch size="25" color="#667581" />
                    </button>
                </form>

                <div className="result">Mostrando 5 de 20 contrato(s)</div>

                <Scroll>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Status</td>
                                <td>Data inicial</td>
                                <td>Data final</td>
                                <td>Valor</td>
                                <td>Cliente</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Pendente</td>
                                <td>12/10/2019</td>
                                <td>07/12/2019</td>
                                <td>R$ 5.000,00</td>
                                <td>
                                    <Link to="/info-customer">
                                        Fulano da Silva
                                    </Link>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Pendente</td>
                                <td>12/10/2019</td>
                                <td>07/12/2019</td>
                                <td>R$ 5.000,00</td>
                                <td>
                                    <Link to="/info-customer">
                                        Fulano da Silva
                                    </Link>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Pendente</td>
                                <td>12/10/2019</td>
                                <td>07/12/2019</td>
                                <td>R$ 5.000,00</td>
                                <td>
                                    <Link to="/info-customer">
                                        Fulano da Silva
                                    </Link>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Pendente</td>
                                <td>12/10/2019</td>
                                <td>07/12/2019</td>
                                <td>R$ 5.000,00</td>
                                <td>
                                    <Link to="/info-customer">
                                        Fulano da Silva
                                    </Link>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Pendente</td>
                                <td>12/10/2019</td>
                                <td>07/12/2019</td>
                                <td>R$ 5.000,00</td>
                                <td>
                                    <Link to="/info-customer">
                                        Fulano da Silva
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Scroll>
            </Container>
        </>
    );
}
