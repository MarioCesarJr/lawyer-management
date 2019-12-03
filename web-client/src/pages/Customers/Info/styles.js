import styled from 'styled-components';

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Name = styled.h1`
    padding: 20px 15px;
    color: #636e72;
    font-weight: 100;
    font-size: 1.9em;
`;

export const Container = styled.div`
    padding: 20px;

    table {
        width: 65%;
        border-collapse: collapse;

        thead {
            font-weight: bold;
            color: #636e72;

            tr {
                td:first-child {
                    text-align: left;
                }

                td {
                    padding: 5px;
                    text-align: right;
                    color: #636e72;

                    svg {
                        cursor: pointer;
                    }

                    svg:first-child {
                        margin-right: 7px;
                    }
                }
            }
        }

        tbody {
            tr {
                td:first-child {
                    width: 30%;
                    color: #636e72;
                }

                td {
                    padding: 9px;
                    text-align: left;
                    border-top: 1px solid #ddd;
                }
            }
        }

        @media (max-width: 960px) {
            width: 100%;
        }
    }
`;
