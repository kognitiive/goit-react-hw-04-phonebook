import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  filter: '',
  name: '',
  number: '',
};

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      const { name, number } = this.state;
      if (prevState.contacts.includes(name)) {
        return console.log('Already in PhoneBook');
      }
      return { contacts: [name + ': ' + number, ...prevState.contacts] };
    });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number, filter } = this.state;
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const filterInputId = nanoid();
    const names = [...this.state.contacts];

    return (
      <div>
        <h2>PhoneBook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            id={nameInputId}
          />
          <label htmlFor={numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            id={numberInputId}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
          id={filterInputId}
        />

        <ul>
          {names.map(name => {
            return (
              <li key={name}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
