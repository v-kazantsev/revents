import React from 'react';
import { Grid, Segment, Icon, Button } from 'semantic-ui-react';
import format from 'date-fns/format';

const EventDetailsInfo = ({event}) => (
  <Segment.Group>
    <Segment attached='top'>
      <Grid>
        <Grid.Column width={1}>
          <Icon size='large' color='teal' name='info' />
        </Grid.Column>
        <Grid.Column width={15}>
          <p>{event.description}</p>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment attached>
      <Grid verticalAlign='middle'>
        <Grid.Column width={1}>
          <Icon name='calendar' size='large' color='teal' />
        </Grid.Column>
        <Grid.Column width={15}>
          <span>{format(event.date, 'dddd Do MMMM')} at {format(event.date, 'HH:mm')}</span>
        </Grid.Column>
      </Grid>
    </Segment>
   <Segment attached>
     <Grid verticalAlign='middle'>
       <Grid.Column width={1}>
         <Icon name='marker' size='large' color='teal' />
       </Grid.Column>
       <Grid.Column width={11}>
         <span>{event.venue}</span>
       </Grid.Column>
       <Grid.Column width={4}>
         <Button content='Show Map' color='teal' size='tiny' />
         </Grid.Column>
       </Grid>
     </Segment>
   </Segment.Group>
);

export default EventDetailsInfo;
