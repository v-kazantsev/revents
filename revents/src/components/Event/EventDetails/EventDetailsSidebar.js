import React from 'react';
import { Segment, List, Item, Label } from 'semantic-ui-react';

const EventDetailsSidebar = ({visitors}) => {
  const isHost = false;
  return (
  <Segment.Group>
    <Segment
      textAlign='center'
      style={{border: 'none'}}
      attached='top'
      secondary
      inverted
      color='teal'
      >
      {visitors && visitors.length} {visitors && visitors.length === 1 ? 'Person' : 'People'} Going
    </Segment>
    <Segment attached>
      <List relaxed divided>
        {visitors && visitors.map(visitor => (
          <Item key={visitor.id} style={{ position: 'relative'}}>
            {isHost && <Label style={{position: 'absolute'}} color='orange' ribbon='right'>
              Host
            </Label>}
            <Item.Image size='tiny' src={visitor.photoUrl} />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>
                <a>{visitor.name}</a>
              </Item.Header>
            </Item.Content>
          </Item>
        ))}
      </List>
    </Segment>
  </Segment.Group>
)};

export default EventDetailsSidebar;
