import React, { Component } from 'react';
import { increment, decrement } from '../actions';
// Semantic-UI
import { Card } from 'semantic-ui-react';

import CharacterInfo from '../components/characters/CharacterInfo';
import UserList from './UserList';

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
                <UserList />
            </div>
        );
    }
}



export default App;
