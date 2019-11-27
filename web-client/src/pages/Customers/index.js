import React from 'react';

import { Top, Container, Title, Required } from './styles';

export default function Customers() {
    return (
        <>
            <Top>
                <Title>Adicionar cliente</Title>
                <Required>
                    <span>*</span>Campo obrigatório
                </Required>
            </Top>
            <Container></Container>
        </>
    );
}
