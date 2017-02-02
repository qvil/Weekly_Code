// React
import React, { Component } from 'react';
// Semantic-ui-react
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

class LeftMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        };
    }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state;

        return(
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation="overlay" width="thin" visible={visible} icon="labeled" vertical inverted>
                        <Menu.Item name="home">
                            <Icon name="home" /> Home
                        </Menu.Item>
                        <Menu.Item name="camera">
                            <Icon name="camera" /> Camera
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as="h3">Content</Header>
                            <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default LeftMenu;
