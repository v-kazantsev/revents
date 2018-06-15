import * as React from 'react';
import { List, Image } from 'semantic-ui-react';

class EventVisitor extends React.Component {
  render() {
    const {visitor} = this.props;
    return (
      <List.Item>
        <Image as='a' size='mini' circular src={visitor.photoUrl} />
      </List.Item>
    )
  }
}

export default EventVisitor;
