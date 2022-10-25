import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

export default function ContactForm(onSubmit) { 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChangeName = evt => {
    const { value } = evt.target;
    setName(value);
  };

  const handleChangeNumber = evt => {
    const { value } = evt.target;
    setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({name, number});
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
      <Form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
          id={nameInputId}
        />
        <label htmlFor={numberInputId}>Number</label>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
          id={numberInputId}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
