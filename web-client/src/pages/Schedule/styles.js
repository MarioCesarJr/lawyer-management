import styled from 'styled-components';
import { darken } from 'polished';

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

export const AddEvent = styled.button`
    margin-right: 20px;
    border: 0;
    padding: 0.8em 1.2em;
    font-weight: bold;
    background-color: #1e94d2;
    color: #fff;

    &:hover {
        background: ${darken(0.03, '#1e94d9')};
    }
`;

export const Container = styled.div`
    padding: 20px;

    .fc-left {
        color: #636e72;
    }

    .fc-right {
        display: flex;
        align-items: center;
        justify-content: center;
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
        cursor: not-allowed;
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
                td {
                    span {
                        color: #636e72;
                    }
                }
            }
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    margin-top: 40px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 0 20px 15px 20px;
    width: 700px;

    form {
        div {
            display: flex;
            margin: 10px;

            div {
                width: 100%;

                label {
                    margin-left: -10px;
                }

                label input {
                    width: 100%;
                }

                label select {
                    width: 100%;
                }
            }

            label {
                display: block;
                flex: 1;
                position: relative;
                color: #636e72;

                span {
                    position: absolute;
                    top: 1em;
                    left: 0;
                    transition: all 150ms ease-in;

                    span {
                        color: #c0392b;
                        display: contents;
                    }
                }
            }

            label.on span {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 0.8em;
                color: #1e94d2;
            }
        }

        label input {
            width: 100%;
            border: none;
            border-bottom: 1px solid #ddd;
            outline: none;
            font-size: 1.2em;
            margin-top: 1.2em;
            color: #636e72;

            @media (max-width: 960px) {
                width: 100%;
            }
        }

        label select {
            width: 50%;
            border: none;
            border-bottom: 1px solid #ddd;
            outline: none;
            font-size: 1.2em;
            margin-top: 1.2em;
            color: #636e72;

            @media (max-width: 960px) {
                width: 100%;
            }
        }

        label textarea {
            resize: none;
            width: 100%;
            border: none;
            border-bottom: 1px solid #ddd;
            outline: none;
            font-size: 1.2em;
            margin-top: 1.2em;
            color: #636e72;

            @media (max-width: 960px) {
                width: 100%;
            }
        }

        label.on input {
            border-bottom: 1px solid #1e94d2;
        }
    }
`;

export const ModalTitle = styled.h1`
    color: #636e72;
    font-weight: 100;
    font-size: 1.6em;
`;

export const Required = styled.h4`
    padding: 20px 0;
    color: #7f8c8d;
    margin-right: 10px;

    span {
        color: #c0392b;
        padding: 0 3px;
    }
`;

export const SaveModalButton = styled.button`
    margin-right: 30px;
    border: 0;
    padding: 0.8em 1.2em;
    font-weight: bold;
    background-color: #1e94d2;
    color: #fff;

    &:hover {
        background: ${darken(0.03, '#1e94d9')};
    }
`;

export const CloseModalButton = styled.button`
    margin-right: 30px;
    border: 0;
    padding: 0.8em 1.2em;
    font-weight: bold;
    background-color: #fff;
    text-decoration: underline;
    color: #1e94d2;
`;
