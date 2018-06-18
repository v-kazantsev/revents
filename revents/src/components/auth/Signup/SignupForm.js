import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import TextInput from '../../../common/form/TextInput';
import { registerUser } from '../../../actions/authActions';

const actions = {
  registerUser
}

const validate = combineValidators({
  displayName: isRequired('Display name'),
  email: isRequired('email'),
  password: isRequired('password')
})

const SignupForm = ({handleSubmit, registerUser, error, invalid, submitting}) => (
  <Form error size='large' onSubmit={handleSubmit(registerUser)}>
    <Segment>
      <Field
        name='displayName'
        component={TextInput}
        type='text'
        placeholder='User Name'
      />
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
      {error && <Label basic color='red'>{error}</Label>}
      <Button disabled={invalid || submitting} content='Sign Up' color='teal' fluid size='large' />
    </Segment>
  </Form>
);

export default connect(null, actions)(reduxForm({form: 'signupForm'}, validate)(SignupForm));
