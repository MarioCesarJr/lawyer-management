import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({ activeTab, label, onHandleClick }) {
    function onClick() {
        onHandleClick(label);
    }

    let className = 'tab-list-item';

    if (activeTab === label) {
        className += ' tab-list-active';
    }

    return (
        <li className={className} onClick={onClick}>
            {label}
        </li>
    );
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
