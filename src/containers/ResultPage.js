import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import { close } from '../actions';

class ResultPage extends Component {
    constructor(props) {
        super(props);
    }
    state = { open: false }

    render() {
        const { open, close, onClose, dimmer, mafiaInfo } = this.props

        return(
            <div>
                <Modal
                  open={ open }
                  dimmer={ dimmer }
                  onClose={ close }
                >
                    <Modal.Header>Mafia is { mafiaInfo.userId }</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src={ mafiaInfo.userImage } />
                        <Modal.Description>
                            <Header>{ mafiaInfo.userCharacter }</Header>
                            <p>{ mafiaInfo.userDescription }</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={ onClose }>
                            Back
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Yap' onClick={ close }></Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    open: state.resultPageState.open,
    mafia: state.mafia,
    mafiaInfo: state.mafia.mafiaInfo,
    getMafia: state.mafia
});

let mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(close()),
})

ResultPage = connect(null, mapDispatchToProps)(ResultPage);
ResultPage = connect(mapStateToProps)(ResultPage);

export default ResultPage;
