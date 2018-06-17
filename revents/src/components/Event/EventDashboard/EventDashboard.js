import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import { firestoreConnect } from 'react-redux-firebase';

import EventList from '../EventList/EventList';
import { deleteEvent } from '../../../actions/eventActions';
import { openModal } from '../../../actions/modalActions';
import EventActivity from '../EventActivity/EventActivity';


const mapStateToProps = (state) => ({
  events: state.firestore.ordered.events
});

const mapDispatchToProps = {
  deleteEvent,
  openModal
};

class EventDashboard extends React.Component {
  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId)
  };
  render() {
    const {events, openModal} = this.props;
    return(
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            onEventDelete={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(firestoreConnect([{collection: 'events'}])(EventDashboard));
