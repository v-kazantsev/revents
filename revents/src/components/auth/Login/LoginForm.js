import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../common/form/TextInput';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';

const actions = {
  login
}

const LoginForm = ({login, handleSubmit}) => (
  <Form error size='large' onSubmit={handleSubmit(login)}>
    <Segment>
      <Field
        name='email'
        component={TextInput}
        type='email'
        placeholder='E-mail address'
      />
      <Field
        name='password'
        component={TextInput}
        type='password'
        placeholder='password'
      />
      <Button content='Login' color='teal' fluid size='large' />
    </Segment>
  </Form>
);

export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));
