import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Container } from './App.styled';

const INITIAL_STATE = {
  filter: '',
  name: '',
  number: '',
};

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
      for (const contact of prevState.contacts) {
        if (contact.name.includes(name)) {
          return alert(name + `is already in contacts`);
        }
      }
      return { contacts: [{ name, number }, ...prevState.contacts] };
    });
    this.reset();
  };

  visibleContacts = names => {
    if (names.length === 0) {
      return [];
    } else {
      return names.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
  };

  onDeleteName = currName => {
    const newCont = [];
    this.state.contacts.map(contact => {
      if (currName === contact.name) {
        return {};
      }
      return newCont.push(contact);
    });
    this.setState({ contacts: [...newCont] });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const names = [...this.state.contacts];
    const visibleContacts = this.visibleContacts(names);

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList
          visibleContacts={visibleContacts}
          onDeleteName={this.onDeleteName}
        />
      </Container>
    );
  }
}
