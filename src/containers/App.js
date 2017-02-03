import React, { Component } from 'react';
import { Link } from 'react-router';
import { increment, decrement } from '../actions';
// Semantic-ui-react
import { Sidebar, Segment, Menu, Icon, Dimmer, Loader } from 'semantic-ui-react';
// import CharacterInfo from '../components/characters/CharacterInfo';
import TopMenu from './TopMenu';
import LeftMenu from './LeftMenu';
import MainPage from './MainPage';
import UserList from './UserList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false,
            loading: true,
        };
    }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleLoading = () => this.setState({ loading: !this.state.loading })

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
                <Dimmer active={this.state.loading} style={{ width: "100%", height: "100%" }}>
                    <Loader size="large">Loading</Loader>
                </Dimmer>
                <TopMenu toggleVisibility={this.toggleVisibility} style={{ marginBotton: 0 }}/>
                <Sidebar.Pushable as={Segment} style={{ marginTop: 0 }}>
                    <Sidebar as={Menu} animation="overlay" width="thin" visible={visible} icon="labeled" vertical inverted>
                        <Link to="/">
                            <Menu.Item name="home">
                                <Icon name="home" />Home
                            </Menu.Item>
                        </Link>
                        <Link to="/signin">
                            <Menu.Item name="camera">
                                <Icon name="camera" />Camera
                            </Menu.Item>
                        </Link>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <UserList toggleLoading={this.toggleLoading}/>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <MainPage />
            </div>
        );
    }
}



export default App;
