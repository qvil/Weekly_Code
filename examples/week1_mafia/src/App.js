import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const App = () => (

  <Card>
    <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Test
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default App;
