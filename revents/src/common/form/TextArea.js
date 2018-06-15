import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextArea = ({input, rows, type, placeholder, meta: {touched, error}}) => (
  <Form.Field error={touched && !!error}>
    <textarea {...input} placeholder={placeholder} rows={rows} />
    {touched && error && <Label color='red' basic>{error}</Label>}
  </Form.Field>
);

export default TextArea;
