import * as React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Menu, Container, Button} from 'semantic-ui-react';
import LoggedOut from './Menus/LoggedOutMenu';
import LoggedIn from './Menus/LoggedInMenu';

class NavBar extends React.Component {
  state = {
    isAuthenticated: false
  }
  handleLogIn = () => {
    this.setState({
      isAuthenticated: true
    })
  };
  handleLogOut = () => {
    this.setState({
      isAuthenticated: false
    })
    this.props.history.push('/')
  };
  render() {
    const {isAuthenticated} = this.state;
    return(
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <img src='/assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name='Events' />
          {isAuthenticated && <Menu.Item as={NavLink} to='/people' name='People' />}
          {isAuthenticated && <Menu.Item>
            <Button as={Link} to='/create' content='Create Event' floated='right' positive inverted />
          </Menu.Item>}
          {isAuthenticated ?
          <LoggedIn onLogOut={this.handleLogOut}/>:
          <LoggedOut onLogIn={this.handleLogIn}/>}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(NavBar);
