import React, { Component } from 'react';
import Mafia from './components/characters/Mafia';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Mafia
                    userColor="yellow"
                    userId="qvil"
                    userDescription="I am not Mafia"
                />
            </div>
        );
    }
}

export default App;
