import styled from 'styled-components';

export const Container = styled.div`
    .tab-list {
        border-bottom: 1px solid #ccc;
        padding-left: 0;

        max-width: 1100px;
        margin: 0 auto;
    }

    .tab-list-item {
        display: inline-block;
        list-style: none;
        margin-bottom: -1px;
        padding: 0.5rem 0.75rem;
        color: #1e94d2;
        cursor: pointer;
    }

    .tab-list-active {
        background-color: white;
        border: solid #ccc;
        border-width: 1px 1px 0 1px;
    }
`;
