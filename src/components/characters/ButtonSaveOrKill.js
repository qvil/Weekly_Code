// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Button, Card, Icon, Divider } from 'semantic-ui-react';
// Custom Components
import { increment, decrement } from '../../actions';

class ButtonSaveOrKill extends Component {

    constructor(props) {
        super(props);

        this.state = {
            kill: false
        }
    }

    handleSave = () => {
        this.setState({ kill: false });
    }

    handleKill = () => {
        this.setState({ kill: true });
    }

    render() {
        const { onIncrement, onDecrement, count } = this.props;

        return(
            <div className='ui two buttons'>
                <Button.Group
                    size='medium'
                    widths='3'
                >
                    <Button
                        compact={ true }
                        color={ ( !this.state.kill ) ? 'green' : 'grey' }
                        // onClick={ this.handleSave(onIncrement) }
                        onClick={ onIncrement }
                    >Save
                    </Button>
                    <Button.Or />
                    <Button
                        compact={ true }
                        color={ ( this.state.kill ) ? 'red' : 'grey' }
                        // onClick={ this.handleKill(onDecrement) }
                        onClick={ onDecrement }
                    >Kill
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    score: state.counter.score
});

let mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
})

ButtonSaveOrKill = connect(mapStateToProps)(ButtonSaveOrKill);
ButtonSaveOrKill = connect(null, mapDispatchToProps)(ButtonSaveOrKill);

export default ButtonSaveOrKill;
