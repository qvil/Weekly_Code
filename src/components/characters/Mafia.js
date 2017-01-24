import React, { Component } from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';

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

const extra = (
    <div>
        <div className='ui two buttons'>
          <Button
              basic
              color='green'
              onClick={ console.log(1) }
          >Save</Button>
          <Button
              basic
              color='red'
              onClick={ console.log(1) }
          >Kill</Button>
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

const buttonUserConditionals = (
    <Button.Group>
        <Button>Save</Button>
        <Button.Or />
        <Button positive={true}
                onClick={ console.log(1) } >Kill</Button>
    </Button.Group>
);


class ButtonSaveKill extends Component {
    constructor(props) {
        super(props);
    }

    handleSave = () => {
        console.log('save');
    }

    handleKill = () => {
        console.log('kill');
    }

    render() {
        return(
            <div className='ui two buttons'>
              <Button
                  basic
                  color='green'
                  onClick={ this.handleSave }
              >Save
              </Button>
              <Button
                  basic
                  color='red'
                  onClick={ this.handleKill }
              >Kill
              </Button>
            </div>
        );
    }
}

class Mafia extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        alert('click');
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
                    extra={ <ButtonSaveKill /> }
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
