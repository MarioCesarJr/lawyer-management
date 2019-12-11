import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import {
    MdDashboard,
    MdEvent,
    MdSupervisorAccount,
    MdInsertDriveFile,
} from 'react-icons/md';

import { FaFileContract, FaClipboardList } from 'react-icons/fa';

import Header from '~/components/Header';

export default function Sidebar() {
    const [toggler, setToggler] = useState(false);

    function handleToggler() {
        if (toggler === false) {
            setToggler(true);
        } else {
            setToggler(false);
        }
    }

    return (
        <>
            <Header handleToggler={handleToggler} />
            <Container active={toggler}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/dashboard"
                                activeClassName="is-selected"
                            >
                                <MdDashboard />
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/tasks" activeClassName="is-selected">
                                <FaClipboardList />
                                Tarefas
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/schedule"
                                activeClassName="is-selected"
                            >
                                <MdEvent />
                                Agenda
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/customers"
                                activeClassName="is-selected"
                                className={
                                    window.location.pathname ===
                                        '/new-customer' ||
                                    window.location.pathname ===
                                        '/info-customer'
                                        ? 'is-selected'
                                        : ''
                                }
                            >
                                <MdSupervisorAccount />
                                Clientes
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/lawsuits"
                                activeClassName="is-selected"
                                className={
                                    window.location.pathname === '/new-lawsuit'
                                        ? 'is-selected'
                                        : ''
                                }
                            >
                                <MdInsertDriveFile />
                                Processos
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/contracts"
                                activeClassName="is-selected"
                                className={
                                    window.location.pathname === '/new-contract'
                                        ? 'is-selected'
                                        : ''
                                }
                            >
                                <FaFileContract />
                                Contratos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    );
}
