import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Image, Modal, Popup } from 'semantic-ui-react';
import MafiaImage from '../../img/Wanted001.jpg';
import { ButtonCircularSNS } from '../components/main-page';
import { increment, decrement } from '../actions';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            dimmer: true,
            button: {
                loading: false
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
                            <Header>You just to find out the mafia!</Header>
                            <p>Are You Ready?</p>
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
