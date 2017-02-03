// React
import React, { Component } from 'react';
import { Link } from 'react-router';
// Semantic-ui-react
import { Button, Dropdown, Menu, Icon, Item } from 'semantic-ui-react';
// Common
import { languageOptions } from '../common';

const asas = () => (
    <Link to="/signin">home</Link>
);

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
                {/* <Menu.Item><Icon name="list" size="large" color="green"></Icon></Menu.Item> */}
                <Link to="/"><Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick} style={{ width: "100%", height: "100%" }}/></Link>
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
                        <Button color="green">Sign Up</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/signin"><Button primary>Sign In</Button></Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default TopMenu;
