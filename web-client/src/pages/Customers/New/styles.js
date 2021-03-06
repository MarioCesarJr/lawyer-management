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

export const Required = styled.h4`
    padding: 20px 0;
    color: #7f8c8d;
    margin-right: 30px;

    span {
        color: #c0392b;
        padding: 0 3px;
    }
`;

export const Container = styled.div`
    form {
        .person_type {
            display: flex;

            margin: 20px 15px 40px 20px;

            span {
                color: #c0392b;
            }

            input {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;

                border-radius: 50%;
                width: 16px;
                height: 16px;

                border: 2px solid #ccc;
                transition: 0.2s all linear;
                outline: none;

                margin-right: 5px;
            }

            input:checked {
                border: 6px solid #1e94d2;
            }

            label {
                margin-right: 5px;
                color: #636e72;
            }
        }

        .panel {
            max-width: 1100px;
            min-height: 400px;
            background: #fff;
            border: 1px solid #ccc;
            border-top: 0;
            padding: 30px;
            margin: 0 auto;

            div {
                display: flex;
                margin: 10px;

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

                    span:nth-last-child(1) {
                        color: #c0392b;
                        margin-top: 30px;
                    }
                }

                label.on span:nth-last-child(1) {
                    display: none;
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

            label.on input {
                border-bottom: 1px solid #1e94d2;
            }
        }
    }
`;

export const SaveButton = styled.button`
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
