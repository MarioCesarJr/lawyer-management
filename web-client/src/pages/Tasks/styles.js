import styled from 'styled-components';

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    margin-left: 15px;
    color: #636e72;
    font-weight: 100;
    font-size: 1.9em;
`;

export const AddTask = styled.h4`
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

    ul {
        padding: 10px;
        border-top: 1px solid #ddd;

        li {
            display: flex;

            svg {
                width: 40px;
                font-size: 25px;
            }

            div {
                strong {
                    font-weight: 100;
                    font-size: 1.3em;
                    color: #1e94d2;
                }

                .lawsuit {
                    margin-top: 4px;
                    font-size: 1.1em;
                }

                p {
                    margin-top: 2px;
                    margin-bottom: 2px;
                    color: #636e72;
                }

                div {
                    margin-top: 10px;
                    margin-bottom: 10px;

                    a {
                        padding: 5px;
                        border: 1px solid #1e94d2;
                        color: #1e94d2;
                    }
                }
            }
        }
    }
`;
