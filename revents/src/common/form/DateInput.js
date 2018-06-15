import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DateInput = ({input: {value, onChange, ...other}, width, placeholder, meta: {touched, error}, ...rest}) => (
  <Form.Field error={touched && !!error} width={width}>
    <DatePicker
      {...rest}
      placeholderText={placeholder}
      selected={value ? moment(value) : null}
      onChange={onChange}
      {...other}
    />
    {touched && error && <Label color='red' basic>{error}</Label>}
  </Form.Field>
);

export default DateInput;
