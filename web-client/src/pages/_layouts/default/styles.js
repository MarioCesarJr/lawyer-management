import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    overflow-y: auto;
`;

export const Content = styled.section`
    margin-top: 60px;
    padding: 0 5px;
    transition: 0.5s;

    @media (min-width: 960px) {
        margin-left: 220px;
    }
`;
