import * as React from 'react';
import EventListItem from './EventListItem';

class EventList extends React.Component {
  render() {
    const {events, onEventDelete} = this.props;
    return (
      <div>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventDelete={onEventDelete}
            />
        ))}
      </div>
    )
  }
}

export default EventList;
