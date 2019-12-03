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

export const AddLawsuit = styled.h4`
    padding: 20px 0;
    margin-right: 30px;

    a {
        display: inline-block;
        padding: 0.8em 1.2em;

        background-color: #1e94d2;
        color: #fff;
    }
`;

export const Container = styled.div`
    padding: 20px;

    div {
        max-width: 750px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            color: #636e72;

            @media (max-width: 960px) {
                display: none;
            }

            svg {
                cursor: pointer;
            }

            svg:first-child {
                margin-right: 8px;
            }
        }
    }

    form {
        position: relative;
        width: 580px;

        @media (max-width: 960px) {
            width: 380px;
        }

        input {
            border: 1px solid #ccc;
            border-radius: 2px;
            height: 40px;
            padding: 15px 35px 15px 15px;
            width: 100%;

            @media (max-width: 960px) {
                ::-webkit-input-placeholder {
                    color: #fff;
                }

                input:-moz-placeholder {
                    color: #fff;
                }
            }
        }

        button {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
            border: none;
            background: transparent;
            outline: none;
            padding: 9px 5px;
        }
    }

    .result {
        margin-top: 30px;
        color: #636e72;
    }

    table {
        margin-top: 5px;
        width: 100%;
        border-collapse: collapse;

        thead {
            text-align: left;
            font-weight: bold;
            color: #636e72;

            tr {
                td {
                    padding: 8px;
                    border-top: 2px solid #ddd;
                    border-bottom: 2px solid #ddd;

                    input {
                        margin: 4px 0 0;
                    }
                }
            }
        }

        tbody {
            tr {
                td {
                    padding: 8px;
                    border-top: 1px solid #ddd;
                    color: #636e72;

                    a {
                        color: #1e94d2;
                    }

                    input {
                        margin: 4px 0 0;
                    }
                }
            }
        }
    }
`;
