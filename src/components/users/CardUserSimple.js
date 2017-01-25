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

class CardUserSimple extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userImage, userId, userCharacter, userDescription, userKillScore } = this.props;

        return(
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src={ userImage } />
                <Card.Header>
                  { userId }
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
