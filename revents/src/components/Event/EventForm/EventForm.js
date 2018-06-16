import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Grid, Header } from 'semantic-ui-react';
import cuid from 'cuid';
import { reduxForm, Field } from 'redux-form';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import moment from 'moment';
import Script from 'react-load-script';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { createEvent, updateEvent } from '../../../actions/eventActions';
import TextInput from '../../../common/form/TextInput';
import TextArea from '../../../common/form/TextArea';
import SelectInput from '../../../common/form/SelectInput';
import DateInput from '../../../common/form/DateInput';
import PlaceInput from '../../../common/form/PlaceInput';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.find(event => event.id === eventId)
  }
  return {
    initialValues: event
  }
};

const mapDispatchToProps = {
  createEvent,
  updateEvent
};

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'}
];

const validate = combineValidators({
  title: isRequired({message: 'Title can\'t be blank!'}),
  category: isRequired({message: 'Please select a category'}),
  description: composeValidators(
    isRequired({message: 'Please provide a description'}),
    hasLengthGreaterThan(5)({message: 'Description is too short!'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

class EventForm extends React.Component {
  state = {
    scriptLoaded: false,
    cityLatLng: {},
    venueLatLng: {}
  }
  handleScriptLoaded = () => this.setState({scriptLoaded: true});
  handleSubmit = (values) => {
    values.date = moment(values.date).format();
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoUrl: '/assets/user.png'
      }
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };
  render() {
    const {invalid, submitting, pristine} = this.props;
    return(
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
              <Script
                url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9xXWDg0V3q9bc0M2Jhsyks6R4qTJlNaA&libraries=places"
                onLoad={this.handleScriptLoaded}
              />
              <Header sub color='teal' content='Event Details' />
              <Field name='title' type='text' component={TextInput} placeholder='Event title' />
              <Field name='category' type='select' component={SelectInput} options={category} placeholder='Event category' />
              <Field name='description' type='textarea' component={TextArea} rows={3} placeholder='Event description' />
              <Field name='hostedBy' type='text' component={TextInput} placeholder='Hosted by' />
              <Header sub color='teal' content='Event Location' />
              <Field name='city' type='text' component={PlaceInput} options={{types: ['(cities)']}} placeholder='City' />
              {this.state.scriptLoaded &&
              <Field name='venue' type='text' component={TextInput} placeholder='Venue' />}
              <Field
                name='date'
                type='text'
                component={DateInput}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder='Date' />
              <Button disabled={invalid || submitting || pristine} content='Submit' positive type='submit' />
              <Button content='Cancel' type='button' onClick={this.props.history.goBack}/>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'eventForm', enableReinitialize: true, validate})   (EventForm));
