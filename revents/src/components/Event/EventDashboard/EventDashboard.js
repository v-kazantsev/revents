import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';

import EventList from '../EventList/EventList';
import { deleteEvent } from '../../../actions/eventActions';
import { openModal } from '../../../actions/modalActions';


const mapStateToProps = (state) => ({
  events: state.events
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
          <Button content='Test Modal' onClick={() => openModal('TestModal', {})}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
