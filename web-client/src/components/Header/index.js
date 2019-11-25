import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { MdSettings } from 'react-icons/md';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <h1>LM</h1>
                    </Link>
                </nav>

                <aside>
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
