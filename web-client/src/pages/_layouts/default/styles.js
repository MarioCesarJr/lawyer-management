import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    overflow-y: auto;
`;

export const Content = styled.section`
    margin-top: 60px;
    overflow-y: auto;
    height: calc(100% - 64px);
    padding: 0 5px;
    transition: 0.5s;
    max-width: 1200px;

    @media (min-width: 960px) {
        margin-left: 210px;
    }
`;
