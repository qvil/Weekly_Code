import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


class ButtonLabeledLikeShare extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { floated } = this.props;

        return(
            <div>
                <Button
                    floated={ floated }
                    color="red"
                    content="Like"
                    icon="heart"
                    label={{ basic: true, color: 'red', pointing: 'left', content: '0629' }}
                />
                <Button
                    floated={ floated }
                    color="blue"
                    content="Share"
                    icon="share"
                    label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '0916' }}
                />
            </div>
        );
    }
}

export default ButtonLabeledLikeShare;
