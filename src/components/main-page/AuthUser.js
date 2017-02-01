// React
import React, { Component } from 'react';
// Semantic-ui-react
import { Icon, Feed } from 'semantic-ui-react';
// Custom
import anonymousImage from '../../../img/anonymous.jpg';

class AuthUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { size, user, email, date, photoURL, like } = this.props;

        return(
            <Feed size={ size }>
                <Feed.Event>
                    <Feed.Label image={ photoURL ? photoURL : anonymousImage } />
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>{ user }</Feed.User> { email }
                            <Feed.Date>{ date }</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                            <Feed.Like>
                                <Icon name="like" /> { like } Likes
                            </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        );
    }
}

export default AuthUser;
