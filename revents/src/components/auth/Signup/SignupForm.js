import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../common/form/TextInput';

const SignupForm = () => (
  <Form error size='large'>
    <Segment>
      <Field
        name='userName'
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
      <Button content='Sign Up' color='teal' fluid size='large' />
    </Segment>
  </Form>
);

export default reduxForm({form: 'signupForm'})(SignupForm);
