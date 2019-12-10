import styled from 'styled-components';

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    padding: 20px 15px;
    color: #636e72;
    font-weight: 100;
    font-size: 1.9em;
`;

export const Container = styled.div`
    padding: 20px;
`;

export const ChartContainer = styled.div`
    canvas {
        max-width: 1000px !important;
        max-height: 490px !important;
    }
`;
