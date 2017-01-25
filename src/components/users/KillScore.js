// React
import React, { Component } from 'react';
// Semantic-UI
import { Icon } from 'semantic-ui-react';

class KillScore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a>Score : <Icon name='user' />{ this.props.score }</a>
        );
    }
}

export default KillScore;

// const KillScore = (props) => {
//     return (
//     );
// };
//
// export default KillScore;
