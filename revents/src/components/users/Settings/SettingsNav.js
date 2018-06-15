import React from 'react';
import { Menu, Grid, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SettingsNav = () => (
  <Grid.Column width={4}>
    <Menu vertical>
      <Header icon='user' attached inverted color='gray' content='Profile' />
      <Menu.Item as={ NavLink } to='/settings/basic'>Basic</Menu.Item>
      <Menu.Item as={ NavLink } to='/settings/about'>About Me</Menu.Item>
      <Menu.Item as={ NavLink } to='/settings/photos'>My Photos</Menu.Item>
    </Menu>
    <Grid.Row />
    <Menu vertical>
      <Header icon='settings' attached inverted color='gray' content="Accoount" />
      <Menu.Item as={ NavLink } to='/settings/account'>My account</Menu.Item>
    </Menu>
  </Grid.Column>
);

export default SettingsNav;
