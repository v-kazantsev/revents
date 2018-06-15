import React from 'react';
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react';

const EventDetailsChat = () => (
  <Segment.Group>
    <Segment textAlign='center' attached='top' inverted  color='teal' style={{border: 'none'}}>
      <Header>Chat about this event</Header>
    </Segment>
    <Segment attached>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='/assets/user.png' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42 PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
      </Comment>
      <Form reply>
        <Form.TextArea />
        <Button content='Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
  </Segment>
</Segment.Group>
);

export default EventDetailsChat;
