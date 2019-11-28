import styled from 'styled-components';

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    padding: 20px 15px;
    color: #636e72;
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
                width: 50%;
                border: none;
                border-bottom: 1px solid #ddd;
                outline: none;
                font-size: 1.2em;
                margin-top: 1.2em;

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
