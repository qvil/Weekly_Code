import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Image, Modal, Popup, Icon } from 'semantic-ui-react';
import MafiaImage from '../../img/Wanted001.jpg';
import { ButtonCircularSNS } from '../components/main-page';
import { increment, decrement } from '../actions';
import firebase from 'firebase';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyDcielkp9FWsT9xmc6VxldkiD1TfWt6gv8",
    authDomain: "mafia-be795.firebaseapp.com",
    databaseURL: "https://mafia-be795.firebaseio.com",
    storageBucket: "mafia-be795.appspot.com",
    messagingSenderId: "744625572083"
};
firebase.initializeApp(config);

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            dimmer: true,
            button: {
                loading: false
            },
            auth: {
                token: '',
                user: 'anonymous',
                errorCode: '',
                errorMessage: '',
                email: '',
                credential: '',
            }
        };
    }

    // state = { open: false }
    show = (dimmer) => () => { this.setState({ dimmer: dimmer, open: true }) }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    ready = () => {
        // TODO: ajax call to server
        // This is just example
        this.setState({ button: { loading: true } })

        setTimeout(() => {
            this.close()
            this.setState({ button: { loading: false } })
        }, 1000);
    }

    auth = () => {
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user.displayName;
            // ...
            this.setState({ auth: { user: user } });
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
    }

    render() {
        const { like, increseLike } = this.props;
        const { open, dimmer } = this.state;

        return(
            <div>
                {/* <Button onClick={ this.show(true) }>Default</Button>
                <Button onClick={ this.show('inverted') }>inverted</Button>
                <Button onClick={ this.show('blurring') }>blurring</Button> */}
                <Modal
                    dimmer={ dimmer }
                    open={ open }
                    onClose={ this.close }
                >
                    <Modal.Header>Welcome To Mafia Game</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size="medium" src={ MafiaImage } />
                        <Modal.Description>
                            <Header as="h1">You just to find out the mafia!</Header>
                            <Header as="h2">Are You Ready?</Header>
                            <Header as="h3">auth user : { this.state.auth.user }</Header>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Popup
                          trigger={
                              <Button
                                  color="red"
                                  content="Like"
                                  icon="heart"
                                  label={{ basic: true, color: 'red', pointing: 'left', content: like }}
                                  onClick= { increseLike }
                              />
                          }
                          content='Thank you for like!'
                          on='click'
                          hideOnScroll
                        />
                        <Button
                            circular
                            color="green"
                            content="Auth"
                            icon="users"
                            onClick= { this.auth }
                        />
                        <NestedModal />
                        <Button negative content="Nope" onClick={ this.close } />
                        <Button
                            positive
                            loading={ this.state.button.loading }
                            icon="checkmark"
                            labelPosition="right"
                            content="Ready"
                            onClick={ this.ready } />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

class NestedModal extends (Component, MainPage) {
  state = { open: false }

  render() {
    const { share } = this.props;
    const { open } = this.state;

    return (
      <Modal
        dimmer={true}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
            <Button
                color="blue"
                content="Share"
                icon="share"
                label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: share }}
            />
        }
        closeIcon="close"
      >
        <Modal.Header>Share to SNS</Modal.Header>
        <Modal.Content>
          <p>Thank you for using!</p>
          <p>Let's share with friends!</p>
        </Modal.Content>
        <Modal.Actions>
            <ButtonCircularSNS />
        </Modal.Actions>
      </Modal>
    )
  }
}

let mapStateToProps = (state) => ({
    like: state.likeCounter.like,
    share: state.likeCounter.share,
});

MainPage = connect(mapStateToProps)(MainPage);
NestedModal = connect(mapStateToProps)(NestedModal);

let mapDispatchToProps = (dispatch) => ({
    increseLike: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
})

MainPage = connect(null, mapDispatchToProps)(MainPage);

export default MainPage;
