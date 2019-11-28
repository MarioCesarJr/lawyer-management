import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

import { Container } from './styles';

export default function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    function onClickTabItem(tab) {
        setActiveTab(tab);
    }

    return (
        <Container>
            <div className="tabs">
                <ol className="tab-list">
                    {children.map(child => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onHandleClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map(child => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        </Container>
    );
}

Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
};
