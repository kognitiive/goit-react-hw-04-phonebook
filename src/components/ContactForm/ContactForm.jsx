import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = ({ name, number, onChange, onSubmit }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
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
        onChange={onChange}
        id={numberInputId}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
