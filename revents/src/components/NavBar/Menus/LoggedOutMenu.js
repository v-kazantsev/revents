import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const LoggedOut = ({ onLogIn }) => (
  <Menu.Item position='right'>
  <Button onClick={ onLogIn } content='Login' basic inverted />
  <Button content='Sign Up' basic inverted style={{merginLeft: '0.5em'}}/>
  </Menu.Item>
  );

export default LoggedOut;
