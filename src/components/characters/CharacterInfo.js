// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Button, Card, Icon, Divider } from 'semantic-ui-react';
// Custom Components
import ButtonSaveOrKill from './ButtonSaveOrKill';
import KillScore from './KillScore';
import { getRandomNumber } from '../../utils';

const cardColorList = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
];

const characterImageList = {
    mafia: 'http://semantic-ui.com/images/avatar/large/elliot.jpg',
    civil: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
};

class CharacterInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userColor, userId, userCharacter, userDescription, score } = this.props;

        return(
            <div>
                <Card
                    // color={ cardColorList[1] }
                    color={ cardColorList[getRandomNumber(0, cardColorList.length)] }
                    image={ characterImageList.userCharacter }
                    header={ userId }
                    meta={ userCharacter }
                    description={ userDescription }
                    extra={
                        <div>
                            <ButtonSaveOrKill />
                            <Divider />
                            <KillScore score={ score } />
                        </div>
                    }
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    score: state.counter.score
});

CharacterInfo = connect(mapStateToProps)(CharacterInfo);

export default CharacterInfo;
