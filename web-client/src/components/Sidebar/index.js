import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import {
    MdDashboard,
    MdSupervisorAccount,
    MdInsertDriveFile,
} from 'react-icons/md';

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
                            >
                                <MdInsertDriveFile />
                                Processos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    );
}
