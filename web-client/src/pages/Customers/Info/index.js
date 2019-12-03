import React from 'react';
import { MdPrint, MdEdit } from 'react-icons/md';

import { Top, Name, Container } from './styles';

export default function Info() {
    return (
        <>
            <Top>
                <Name>Fulano da Silva</Name>
            </Top>

            <Container>
                <table>
                    <thead>
                        <tr>
                            <td>Processo Ativo(1ª instância)</td>
                            <td>
                                <MdPrint />
                                <MdEdit />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Contrária</td>
                            <td>Manuel Medeiros</td>
                        </tr>
                        <tr>
                            <td>Caso/Identificação</td>
                            <td>Ação de cobrança</td>
                        </tr>
                        <tr>
                            <td>Data do Protocolo</td>
                            <td>01/02/2016</td>
                        </tr>
                        <tr>
                            <td>Número</td>
                            <td>34567.8.24.0033</td>
                        </tr>
                        <tr>
                            <td>Vara</td>
                            <td>3ª</td>
                        </tr>
                        <tr>
                            <td>Audiência</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Último movimento</td>
                            <td>Juntada da contestação</td>
                        </tr>
                        <tr>
                            <td>Data do ultimo movimento</td>
                            <td>25/03/2016</td>
                        </tr>
                        <tr>
                            <td>Última verificação</td>
                            <td>02/04/2016</td>
                        </tr>
                        <tr>
                            <td>Dias parados</td>
                            <td>18 dia(s)</td>
                        </tr>
                        <tr>
                            <td>Tempo do processo</td>
                            <td>72 dia(s)</td>
                        </tr>
                        <tr>
                            <td>Último Contato com gabinete ou cartório</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    );
}
