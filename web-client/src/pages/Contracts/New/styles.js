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
        .panel {
            max-width: 1000px;
            min-height: 400px;
            background: #fff;
            border: 1px solid #ccc;
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
