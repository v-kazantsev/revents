import React from 'react';
import { Segment, Image, Header, Button, Item } from 'semantic-ui-react';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';

const eventImageStyle = {
  filter: 'brightness(40%)'
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const EventDetailsHeader = ({event}) => (
  <Segment.Group>
    <Segment basic attached='top' style={{padding: '0'}}>
      <Image src={`/assets/categotyImages/${event.category}.jpg`} fluid style={eventImageStyle}/>
      <Segment basic style={eventImageTextStyle}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header
                size='huge'
                content={event.title}
                style={{color: 'white'}}
              />
              <p>{format(event.date, 'dddd Do MMMM')} at {format(event.date, 'HH:mm')}</p>
              <p>Hosted by<strong>{event.hostedBy}</strong> </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment>
    <Segment attached='bottom'>
      <Button content='Cancel my place' />
      <Button content='JOIN THIS EVENT' color='teal' />
      <Button as={Link} to={`/manage/${event.id}`} content='Manage Event' color='orange' floated='right' />
    </Segment>
  </Segment.Group>
);

export default EventDetailsHeader;
