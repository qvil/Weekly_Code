// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Button, Card, Icon, Divider, Image } from 'semantic-ui-react';
// Custom Components
import { getRandomNumber } from '../utils';
import CardUserSimple from '../components/users/CardUserSimple';

const userItems = [
    {
        userImage: "http://semantic-ui.com/images/avatar/large/steve.jpg",
        userId: "aaa",
        userCharacter: "mafia",
        userDescription: "I'm not mafia",
        userKillScore: "4",
    },
    {
        userImage: "http://semantic-ui.com/images/avatar2/large/molly.png",
        userId: "bbb",
        userCharacter: "civil",
        userDescription: "I'm not mafia",
        userKillScore: "1",
    },
    {
        userImage: "http://semantic-ui.com/images/avatar/large/jenny.jpg",
        userId: "cccc",
        userCharacter: "docter",
        userDescription: "I'm docter",
        userKillScore: "0",
    },
];

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card.Group>
                { userItems.map((v, i) => {
                    return (
                        <CardUserSimple key={ i }
                            userImage={ v.userImage }
                            userId={ v.userId }
                            userCharacter={ v.userCharacter }
                            userDescription={ v.userDescription }
                            userKillScore={ v.userKillScore }
                        />
                    );
                })}
            </Card.Group>
        );
    }
}

export default UserList;
