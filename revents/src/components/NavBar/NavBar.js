import * as React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Menu, Container, Button} from 'semantic-ui-react';
import { connect } from 'react-redux';

import LoggedOut from './Menus/LoggedOutMenu';
import LoggedIn from './Menus/LoggedInMenu';
import { openModal } from '../../actions/modalActions';
import { logout } from '../../actions/authActions';

const mapStateToProps = state => ({
  auth: state.auth
});

const actions = {
  openModal,
  logout
}

class NavBar extends React.Component {
  handleLogIn = () => {
    this.props.openModal('LoginModal')
  };
  handleSignup = () => {
    this.props.openModal('SignupModal')
  };
  handleLogOut = () => {
    this.props.logout();
    this.props.history.push('/');
  };
  render() {
    const {auth} = this.props;
    const isAuthenticated = auth.isAuthenticated;
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
          <LoggedIn currentUser={auth.currentUser} onLogOut={this.handleLogOut}/>:
          <LoggedOut onLogIn={this.handleLogIn} onSignup={this.handleSignup}/>}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(connect(mapStateToProps, actions)(NavBar));
