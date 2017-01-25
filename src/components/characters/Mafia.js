// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Semantic-UI
import { Button, Card, Icon, Divider } from 'semantic-ui-react';

const cardColorList = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
];

class ButtonSaveKill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    handleSave = () => {
        this.setState({ active: !this.state.active });
        console.log('save');
    }

    handleKill = () => {
        console.log('kill');
    }

    render() {
        return(
            <div>
                <div className='ui two buttons'>
                  <Button
                      toggle
                      active={ this.state.active }
                      color='green'
                      onClick={ this.handleSave }
                  >Save
                  </Button>
                  <Button
                      color='red'
                      onClick={ this.handleKill }
                  >Kill
                  </Button>
                </div>
                <a>
                    Score:
                    <Icon
                        name='user'
                    />
                    {/* { count } */}
                    111
                </a>
            </div>
        );
    }
}

const styles = {
    textAlign: 'center'
};

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
        return(
            <div>
                <div className='ui two buttons' style={ styles }>
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
                <Divider />
                <a>Score : <Icon name='user' />{/* { count } */}111</a>
            </div>
        );
    }
}

class Mafia extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userColor, userId, userCharacter, userDescription, count } = this.props;

        return(
            <div>
                <Card
                    // color={ cardColorList[1] }
                    color={ userColor }
                    image='http://semantic-ui.com/images/avatar/large/elliot.jpg'
                    header={ userId }
                    meta={ userCharacter }
                    description={ userDescription }
                    extra={ <ButtonSaveOrKill /> }
                />
            </div>
        );
    }
}

// let mapStateToProps = (state) => (
//     count: state.counter.count
// );
//
// let mapDispatchToProps = (dispatch) => ({
//     onIncrement: () => dispatch(increment()),
//     onDecrement: () => dispatch(decrement()),
// })
//
// Mafia = connect(mapStateToProps)(Mafia);

export default Mafia;
