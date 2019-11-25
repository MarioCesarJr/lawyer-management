import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import {
    MdDashboard,
    MdSupervisorAccount,
    MdInsertDriveFile,
} from 'react-icons/md';

export default function Sidebar() {
    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard" activeClassName="is-selected">
                            <MdDashboard />
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/customers" activeClassName="is-selected">
                            <MdSupervisorAccount />
                            Clientes
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/lawsuits" activeClassName="is-selected">
                            <MdInsertDriveFile />
                            Processos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
