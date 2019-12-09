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

    .fc-left {
        color: #636e72;
    }

    .fc-right > button {
        background-color: #1e94d2 !important;
        border-color: #1e94d2 !important;
        visibility: hidden;
    }

    .fc-right > button:after {
        visibility: visible;
        background-color: #1e94d2 !important;
        border-color: #1e94d2 !important;
        content: 'Hoje';

        display: inline-block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
        padding: 0.4em 0.65em;
        font-size: 1em;
        line-height: 1.5;
        border-radius: 0.25em;
    }

    .fc-right > .fc-button-group button {
        background-color: #1e94d2;
        border-color: #1e94d2;
    }

    .fc-button-primary:disabled {
        background-color: #1e94d2;
        border-color: #1e94d2;
    }

    .fc-button-primary {
        background-color: #1e94d2;
        border-color: #1e94d2;
    }

    .fc-button-primary:hover {
        background-color: #1e94d2;
        border-color: #1e94d2;
    }

    table {
        thead {
            tr {
                th {
                    span {
                        color: #636e72;
                    }
                }
            }
        }
    }
`;
