import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Wrapper>
            <Header />
            <Sidebar />
            <Content>{children}</Content>
        </Wrapper>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
