import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventDetailsChat from './EventDetailsChat';
import EventDetailsHeader from './EventDetailsHeader';
import EventDetailsInfo from './EventDetailsInfo';
import EventDetailsSidebar from './EventDetailsSidebar';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.find(event => event.id === eventId);
  }
  return event
};

const EventDetails = (event) => (
  <Grid>
    <Grid.Column width={10}>
      <EventDetailsHeader event={event}/>
      <EventDetailsInfo event={event}/>
      <EventDetailsChat />
    </Grid.Column>
    <Grid.Column width={6}>
      <EventDetailsSidebar visitors={event.visitors}/>
    </Grid.Column>
  </Grid>
);

export default connect(mapStateToProps)(EventDetails);
