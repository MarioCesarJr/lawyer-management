import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1e94d2;
    padding: 0 30px;
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
`;
