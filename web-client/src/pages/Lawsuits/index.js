import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdPrint } from 'react-icons/md';
import { AiOutlineFileExcel } from 'react-icons/ai';

import { Top, Title, AddLawsuit, Container } from './styles';

export default function Lawsuits() {
    return (
        <>
            <Top>
                <Title>Processos e casos</Title>
                <AddLawsuit>
                    <Link to="/new-lawsuit">Adicionar</Link>
                </AddLawsuit>
            </Top>

            <Container>
                <div>
                    <form autoComplete="off">
                        <input
                            type="text"
                            placeholder="Digite qualquer coisa para adicionar ao filtro e pressione enter"
                        />
                        <button type="submit">
                            <MdSearch size="25" color="#667581" />
                        </button>
                    </form>
                    <div>
                        <MdPrint />
                        <AiOutlineFileExcel />
                    </div>
                </div>

                <div className="result">
                    Mostrando 5 de 20 processo(s) e caso(s) em lista
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>TÍTULO / CLIENTE</td>
                            <td>AÇÃO / NÚMERO</td>
                            <td>FORO</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">
                                    A União Federal x Demetri Industria de
                                    Móveis Ltda
                                </Link>
                            </td>
                            <td>Dívida Ativa 0005523-97.2009.9.24.0045</td>
                            <td>
                                Vara da Fazenda Pública, Acidentes do Trabalho e
                                Registros Públicos - Palhoça
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">
                                    A União Federal x Demetri Industria de
                                    Móveis Ltda
                                </Link>
                            </td>
                            <td>Dívida Ativa 0005523-97.2009.9.24.0045</td>
                            <td>
                                Vara da Fazenda Pública, Acidentes do Trabalho e
                                Registros Públicos - Palhoça
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">
                                    A União Federal x Demetri Industria de
                                    Móveis Ltda
                                </Link>
                            </td>
                            <td>Dívida Ativa 0005523-97.2009.9.24.0045</td>
                            <td>
                                Vara da Fazenda Pública, Acidentes do Trabalho e
                                Registros Públicos - Palhoça
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">
                                    A União Federal x Demetri Industria de
                                    Móveis Ltda
                                </Link>
                            </td>
                            <td>Dívida Ativa 0005523-97.2009.9.24.0045</td>
                            <td>
                                Vara da Fazenda Pública, Acidentes do Trabalho e
                                Registros Públicos - Palhoça
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">
                                    A União Federal x Demetri Industria de
                                    Móveis Ltda
                                </Link>
                            </td>
                            <td>Dívida Ativa 0005523-97.2009.9.24.0045</td>
                            <td>
                                Vara da Fazenda Pública, Acidentes do Trabalho e
                                Registros Públicos - Palhoça
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    );
}
