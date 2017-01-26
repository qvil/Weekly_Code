import React, { Component } from 'react';
import { increment, decrement } from '../actions';
// Semantic-UI

import CharacterInfo from '../components/characters/CharacterInfo';
import UserList from './UserList';
import ModalInfo from './ModalInfo';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                <ModalInfo />
                <UserList />
            </div>
        );
    }
}



export default App;
