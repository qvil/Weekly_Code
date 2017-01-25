// React
import React, { Component } from 'react';
// Semantic-UI
import { Button } from 'semantic-ui-react';

class ButtonSaveOrKill extends Component {

    constructor(props) {
        super(props);

        this.state = {
            life: ''
        }
    }

    handleSave = () => {
        if ( this.state.life === 'save' ) return;

        this.props.onIncrement();
        this.setState({
            life: 'save',
        });
    }

    handleKill = () => {
        if ( this.state.life === 'kill' ) return;

        this.props.onDecrement();
        this.setState({
            life: 'kill',
        });
    }

    render() {
        const { score } = this.props;

        return(
            <div className='ui two buttons'>
                <Button.Group
                    size='medium'
                    widths='3'
                >
                    <Button
                        compact={ true }
                        color={ ( this.state.life === 'save' ) ? 'green' : 'grey' }
                        onClick={ this.handleSave }
                    >Save
                    </Button>
                    <Button.Or />
                    <Button
                        compact={ true }
                        color={ ( this.state.life === 'kill' ) ? 'red' : 'grey' }
                        onClick={ this.handleKill }
                    >Kill
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

export default ButtonSaveOrKill;
