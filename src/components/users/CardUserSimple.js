// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Card, Divider, Image } from 'semantic-ui-react';
// Custom Components
import ButtonSaveOrKill from './ButtonSaveOrKill';
import KillScore from './KillScore';
import { getRandomNumber } from '../../utils';
import { increment, decrement } from '../../actions';

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

const initState = {
    image: "http://semantic-ui.com/images/wireframe/image.png",
    paragraph: "http://semantic-ui.com/images/wireframe/paragraph.png"
};

class CardUserSimple extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userImage, userId, userCharacter, userDescription, userKillScore,
                onIncrement, onDecrement } = this.props;

        return(
            <Card
                centered
                color={ cardColorList[getRandomNumber(0, cardColorList.length)] }
            >
              <Card.Content>
                <Image floated='right' size='mini' src={ userImage ? userImage : initState.image } />
                <Card.Header>
                  { userId ? userId : <Image src="http://semantic-ui.com/images/wireframe/paragraph.png" /> }
                </Card.Header>
                <Card.Meta>
                  { userCharacter }
                </Card.Meta>
                <Card.Description>
                  { userDescription }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                  <ButtonSaveOrKill
                      onIncrement={ onIncrement }
                      onDecrement={ onDecrement }
                  />
                  <Divider />
                  <KillScore score={ userKillScore } />
              </Card.Content>
            </Card>
            /* <Card
                centered
                color={ cardColorList[getRandomNumber(0, cardColorList.length)] }
                image={ <Image floated='right' size='mini' src={ userImage ? userImage : initState.image } /> }
                header={ userId ? userId : <Image floated='' size='' src="http://semantic-ui.com/images/wireframe/paragraph.png" /> }
                meta={ userCharacter }
                description={ userDescription }
                extra={
                    <div>
                        <ButtonSaveOrKill
                            onIncrement={ onIncrement }
                            onDecrement={ onDecrement }
                        />
                        <Divider />
                        <KillScore score={ userKillScore } />
                    </div>
                }
            /> */
        );
    }
}

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
})

CardUserSimple = connect(null, mapDispatchToProps)(CardUserSimple);

export default CardUserSimple;
