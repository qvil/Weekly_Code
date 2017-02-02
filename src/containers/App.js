import React, { Component } from 'react';
import { increment, decrement } from '../actions';
// Semantic-ui-react
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
// import CharacterInfo from '../components/characters/CharacterInfo';
import TopMenu from './TopMenu';
import LeftMenu from './LeftMenu';
import MainPage from './MainPage';
import UserList from './UserList';

class App extends Component {
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
                {/* <Card.Group>
                    <CharacterInfo
                        userColor='red'
                        userId='aaa'
                        userCharacter='mafia'
                        userDescription='I am not Mafia!'
                    />
                    <CharacterInfo
                        userColor='red'
                        userId='bbb'
                        userCharacter='mafia'
                        userDescription='I am not Mafia!'
                    />
                </Card.Group> */}
                <TopMenu toggleVisibility={this.toggleVisibility}/>
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
                        <UserList />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                {/* <MainPage /> */}
            </div>
        );
    }
}



export default App;
