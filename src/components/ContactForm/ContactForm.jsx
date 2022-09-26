import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          id={nameInputId}
        />
        <label htmlFor={numberInputId}>Number</label>
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          id={numberInputId}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
