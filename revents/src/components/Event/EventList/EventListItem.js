import * as React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import { Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventVisitor from './EventVisitor';

class EventListItem extends React.Component {
  render() {
    const { event, onEventDelete } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={ event.hostPhotoUrl } />
              <Item.Content>
                <Item.Header as='a'>{ event.title }</Item.Header>
                <Item.Description>
                  Hosted by <a>{ event.hostedBy }</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {format(event.date, 'dddd Do MMMM')} at {format(event.date, 'HH:mm')} |
            <Icon name='marker' /> {event.venue }
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            { event.visitors && event.visitors.map(visitor => (
              <EventVisitor key={visitor.id} visitor={visitor}/>
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{ event.description }</span>
          <Button content='View' as={Link} to={`/event/${event.id}`} color='teal' floated='right' />
          <Button content='Delete' as='a' color='red' floated='right' inverted onClick={ onEventDelete(event)} />
        </Segment>
      </Segment.Group>
    )
  }
}

export default EventListItem;
