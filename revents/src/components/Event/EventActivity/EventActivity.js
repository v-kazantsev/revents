import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const EventActivity = () => (
  <Segment.Group>
    <Header attached='top' content='Recent activity' />
    <Segment attached>
      <p>Recent Activity</p>
    </Segment>
  </Segment.Group>
);

export default EventActivity;
