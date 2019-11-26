import styled from 'styled-components';

export const Container = styled.aside`
    position: fixed;
    background-color: #f6f6f6;
    width: 210px;
    border-right: 1px solid #eaeaea;

    top: 56px;
    bottom: 0;
    left: 0;

    overflow-y: auto;
    z-index: 9998;

    transition: 0.5s;

    margin-left: -211px;

    ${({ active }) =>
        active &&
        `
    margin-left: 0px;
  `}

    nav {
        ul {
            li {
                a {
                    display: flex !important;
                    align-items: center !important;

                    text-decoration: none;
                    display: block;
                    padding: 10px 15px;
                    color: #5d6d7e;

                    cursor: pointer;
                }

                svg {
                    margin-left: 40px;
                    margin-right: 5px;
                }
            }

            &:hover,
            :focus li {
                background-color: #dfdfdf;
            }
        }
    }

    .is-selected {
        border-right: 3px solid #1e94d2;
        background-color: #dfdfdf;
        color: #1e94d2;
        width: 100%;
    }

    @media (min-width: 960px) {
        margin-left: 0px;
    }
`;
