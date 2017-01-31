// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Button, Card, Container, Header, Segment } from 'semantic-ui-react';
// Custom Components
import { getRandomNumber } from '../utils';
import CardUserSimple from '../components/users/CardUserSimple';
import ResultPage from './ResultPage';
import { open, getMafia, setMafia } from '../actions';

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
    {
        userImage: "http://semantic-ui.com/images/avatar2/large/rachel.png",
        userId: "ddd",
        userCharacter: "civil",
        userDescription: "I'm docter",
        userKillScore: "0",
    },
];

const styles = {
  button: {
    // marginTop: "20px",
    // marginBotton: "10px"
  }
};

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          fluidButton: {
            loading: false
          }
        }
    }

    onClick = () => {
      this.setState({
        fluidButton: {
          loading: true,
        }
      });
      this.props.onOpen();
      this.setState({
        fluidButton: {
          loading: false,
        }
      });
    }

    render() {
        const { score, getMafia, setMafia, mafiaInfo } = this.props;

        return(
          <div>
              <Container text>
                  <Segment raised>
                      <Header as="h2" textAlign="center">User List</Header>
                  </Segment>
                  <Segment raised>
                      <Card.Group>
                          { userItems.map((v, i) => {
                              v.userCharacter === 'mafia' ? setMafia(v) : console.log(333);

                              return (
                                  <CardUserSimple key={ i }
                                      userImage={ v.userImage }
                                      userId={ v.userId }
                                      userCharacter={ v.userCharacter }
                                      userDescription={ v.userDescription }
                                      userKillScore={ score }
                                  />
                              );
                          })}
                      </Card.Group>
                  </Segment>
                  <Segment
                      raised
                  >
                      <Button
                        primary
                        fluid
                        loading={ this.state.fluidButton.loading }
                        style={ styles.button }
                        onClick={ this.onClick }
                      >Confirm
                      </Button>
                  </Segment>


                  <ResultPage
                      // open={ this.state.resultWindow.open }
                      // dimmer={ this.state.resultWindow.dimmer }
                      mafiaInfo={ mafiaInfo }
                  />
              </Container>
          </div>

        );
    }
}

let mapStateToProps = (state) => ({
    score: state.counter.score,
    mafiaInfo: state.mafia.mafiaInfo,
});

let mapDispatchToProps = (dispatch) => ({
    onOpen: () => dispatch(open()),
    setMafia: (mafiaInfo) => dispatch(setMafia(mafiaInfo)),
    getMafia: () => dispatch(getMafia()),
})

UserList = connect(null, mapDispatchToProps)(UserList);
UserList = connect(mapStateToProps)(UserList);

export default UserList;
