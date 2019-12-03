import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import { Top, Title, AddCustomer, Container } from './styles';

export default function Customers() {
    return (
        <>
            <Top>
                <Title>Clientes</Title>
                <AddCustomer>
                    <Link to="/new-customer">Adicionar</Link>
                </AddCustomer>
            </Top>

            <Container>
                <form autoComplete="off">
                    <input type="text" placeholder="Encontre um cliente" />
                    <button type="submit">
                        <MdSearch size="25" color="#667581" />
                    </button>
                </form>

                <div className="result">Mostrando 5 de 20 cliente(s)</div>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>Nome</td>
                            <td>Telefone</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">Fulano da Silva</Link>
                            </td>
                            <td>48 2259887</td>
                            <td>fulano@gmail.com</td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">Fulano da Silva</Link>
                            </td>
                            <td>48 2259887</td>
                            <td>fulano@gmail.com</td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">Fulano da Silva</Link>
                            </td>
                            <td>48 2259887</td>
                            <td>fulano@gmail.com</td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">Fulano da Silva</Link>
                            </td>
                            <td>48 2259887</td>
                            <td>fulano@gmail.com</td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <Link to="/info-customer">Fulano da Silva</Link>
                            </td>
                            <td>48 2259887</td>
                            <td>fulano@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    );
}
