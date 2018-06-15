import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { createEvent, updateEvent } from '../../../actions/eventActions';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''};
  if (eventId && state.events.length > 0) {
    event = state.events.find(event => event.id === eventId)
  }
  return {
    event
  }
};

const mapDispatchToProps = {
  createEvent,
  updateEvent
};

class EventForm extends React.Component {
  state = {
    event: Object.assign({}, this.props.event)
  };
  // componentDidMount = () => {
  //   if (this.props.selectedEvent !== null) {
  //     this.setState({
  //       event: this.props.selectedEvent
  //     })
  //   }
  // };
  // componentWillReceiveProps = (nextProps) => {
  //   if (this.props.selectedEvent !== nextProps.selectedEvent) {
  //     this.setState({
  //       event: nextProps.selectedEvent || emptyEvent
  //     })
  //   }
  // };
  // componentDidUpdate = (prevProps) => {
  //   if (this.props.selectedEvent !== prevProps.selectedEvent) {
  //     this.setState({
  //       event: this.props.selectedEvent || emptyEvent
  //     })
  //   }
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoUrl: '/assets/user.png'
      }
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };
  handleInputChange = (e) => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event: newEvent
    })
  };
  render() {
    const { title, date, city, venue, hostedBy } = this.state.event;
    return(
      <Segment>
        <Form onSubmit={this.handleSubmit }>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              value={title}
              placeholder='Event Title'
              onChange={this.handleInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              value={date}
              onChange={this.handleInputChange}
              type='date'
              placeholder='Event Date' />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              value={city}
              onChange={this.handleInputChange}
              placeholder='City' />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              value={venue}
              onChange={this.handleInputChange}
              placeholder='Enter the venue' />
          </Form.Field>
          <Form.Field>
            <label>Hosted by</label>
            <input
              name='hostedBy'
              value={hostedBy}
              onChange={this.handleInputChange}
              placeholder='Enter the name of the host' />
          </Form.Field>
          <Button content='Submit' positive type='submit' />
          <Button content='Cancel' type='button' onClick={this.props.history.goBack}/>
        </Form>
      </Segment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
