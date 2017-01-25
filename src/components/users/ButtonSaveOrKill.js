// React
import React, { Component } from 'react';
// Semantic-UI
import { Button } from 'semantic-ui-react';

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
        const { score } = this.props;

        return(
            <div className='ui two buttons'>
                <Button.Group
                    size='medium'
                    widths='3'
                >
                    <Button
                        compact={ true }
                        color={ ( !this.state.kill ) ? 'green' : 'grey' }
                        onClick={ this.handleSave }
                    >Save
                    </Button>
                    <Button.Or />
                    <Button
                        compact={ true }
                        color={ ( this.state.kill ) ? 'red' : 'grey' }
                        onClick={ this.handleKill }
                    >Kill
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

export default ButtonSaveOrKill;
