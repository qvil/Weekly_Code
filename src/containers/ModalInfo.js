import React, { Component } from 'react';
import { Icon, Button, Header, Image, Modal } from 'semantic-ui-react';
import MafiaImage from '../../img/Wanted001.jpg';
import ButtonCircularSNS from '../components/ButtonCircularSNS';

class ModalInfo extends Component {
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
                        <NestedModal />
                        <Button color="red" content="Nope" onClick={ this.close } />
                        <Button
                            color="green"
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

class NestedModal extends (Component, ModalInfo) {
  state = { open: false }

  render() {
    const { open } = this.state

    return (
      <Modal
        dimmer={true}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={<Button primary icon>Share <Icon name='left chevron' /></Button>}
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

export default ModalInfo;
