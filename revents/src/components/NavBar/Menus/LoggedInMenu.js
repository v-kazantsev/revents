import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoggedIn = ({onLogOut, auth}) => (
  <Menu.Item position='right'>
    <Image avatar spaced='right' src='/assets/user.png' />
    <Dropdown pointing='top left' text={auth.displayName? auth.displayName : auth.email}>
      <Dropdown.Menu>
        <Dropdown.Item text='Create Event' icon='plus' />
        <Dropdown.Item text='My Events' icon='calendar' />
        <Dropdown.Item text='My Network' icon='users' />
        <Dropdown.Item text='My Profile' icon='user' />
        <Dropdown.Item as={Link} to='/settings' text='Settings' icon='cogs' />
        <Dropdown.Item onClick={onLogOut} text='Logout' icon='sign out' />
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Item>
);

export default LoggedIn;
