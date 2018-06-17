import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const LoggedOut = ({onLogIn, onSignup}) => (
  <Menu.Item position='right'>
  <Button onClick={onLogIn} content='Login' basic inverted />
  <Button onClick={onSignup} content='Sign Up' basic inverted style={{merginLeft: '0.5em'}}/>
  </Menu.Item>
  );

export default LoggedOut;
