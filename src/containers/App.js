import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

import Mafia from '../components/characters/Mafia';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Mafia
                    userColor='red'
                    userId='qvil'
                    userCharacter='Mafia'
                    userDescription='I am not Mafia!'
                />
            </div>
        );
    }
}

export default App;
