import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    background-color: #1e94d2;
    padding: 0 30px;

    top: 0;
    right: 0;
    left: 0;

    z-index: 9999;
`;

export const Content = styled.div`
    height: 56px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        a {
            color: #fff;
        }
    }

    aside {
        a {
            line-height: 56px;
            color: #fff;
            text-decoration: none;
            font-size: 1.5em;
        }

        @media (min-width: 960px) {
            a {
                display: none;
            }
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    div {
        strong {
            color: #fff;
            margin-right: 5px;
        }
    }

    @media (max-width: 960px) {
        display: none;
    }
`;
