// React
import React, { Component } from 'react';
// Semantic-ui-react
import { Button, Dropdown, Menu } from 'semantic-ui-react';
// Common
import { languageOptions } from '../common';

class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: "home",
            language: 'Language'
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        const { toggleVisibility } = this.props;

        return(
            <Menu size="small" color="green">
                <Menu.Item onClick={toggleVisibility}><img src='http://semantic-ui.com/images/logo.png' /></Menu.Item>
                <Menu.Item name="home" active={ activeItem === "home" } onClick={ this.handleItemClick } />
                <Menu.Item name="ingame" active={ activeItem === "ingame" } onClick={ this.handleItemClick } />

                <Menu.Menu position="right">
                    <Menu.Item>
                        <Dropdown
                            placeholder="Language"
                            selection={ true }
                            search={ true }
                            options={ languageOptions }
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Button color="green">Sign up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default TopMenu;
