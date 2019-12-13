import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { Container, Content, Profile } from './styles';
import { MdSettings } from 'react-icons/md';

export default function Header({ handleToggler }) {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="logo" />
                    </Link>
                </nav>

                <aside>
                    <a href="#/" onClick={handleToggler}>
                        ☰
                    </a>
                    <Profile>
                        <div>
                            <strong>Mário</strong>
                        </div>
                        <MdSettings size={20} color="#fff" />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
