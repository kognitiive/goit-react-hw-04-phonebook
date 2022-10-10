import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  onFormSubmit = ({ name, number }) => {
    this.setState(prevState => {
      const currName = name;

      if (prevState.contacts.find(({ name }) => name === currName)) {
        return alert(name + `is already in contacts`);
      }
      return { contacts: [{ name, number }, ...prevState.contacts] };
    });
  };

  visibleContacts = names => {
    if (names.length === 0) {
      return [];
    }

    return names.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
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

  render() {
    const names = [...this.state.contacts];
    const visibleContacts = this.visibleContacts(names);

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmit} />
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
