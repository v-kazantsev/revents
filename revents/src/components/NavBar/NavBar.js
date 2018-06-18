import * as React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { Menu, Container, Button} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import LoggedOut from './Menus/LoggedOutMenu';
import LoggedIn from './Menus/LoggedInMenu';
import { openModal } from '../../actions/modalActions';

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const actions = {
  openModal,
}

class NavBar extends React.Component {
  handleLogIn = () => {
    this.props.openModal('LoginModal')
  };
  handleSignup = () => {
    this.props.openModal('SignupModal')
  };
  handleLogOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  };
  render() {
    const {auth} = this.props;
    const isAuthenticated = auth.isLoaded && !auth.isEmpty;
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
          {isAuthenticated
          ? <LoggedIn auth={auth} onLogOut={this.handleLogOut}/>
          : <LoggedOut onLogIn={this.handleLogIn} onSignup={this.handleSignup}/>}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(withFirebase(connect(mapStateToProps, actions)(NavBar)));
