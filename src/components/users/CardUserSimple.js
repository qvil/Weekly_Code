// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Button, Card, Icon, Divider, Image } from 'semantic-ui-react';
// Custom Components
import ButtonSaveOrKill from './ButtonSaveOrKill';
import KillScore from './KillScore';
import { getRandomNumber } from '../../utils';

const initState = {
    image: "http://semantic-ui.com/images/wireframe/image.png",
    paragraph: "http://semantic-ui.com/images/wireframe/paragraph.png"
};

class CardUserSimple extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userImage, userId, userCharacter, userDescription, userKillScore } = this.props;

        return(
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src={ userImage ? userImage : initState.image } />
                <Card.Header>
                  { userId ? userId : <Image floated='' size='' src="http://semantic-ui.com/images/wireframe/paragraph.png" /> }
                </Card.Header>
                <Card.Meta>
                  { userCharacter }
                </Card.Meta>
                <Card.Description>
                  { userDescription }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                  <ButtonSaveOrKill />
                  <Divider />
                  <KillScore score={ userKillScore } />
              </Card.Content>
            </Card>
        );
    }
}

export default CardUserSimple;
