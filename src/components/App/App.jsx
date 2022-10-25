import React, {useState, useEffect} from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Container } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const localContacts = window.localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(localContacts)
    if (parsedContacts) { return parsedContacts}
    return '';
  });
  const [filter, setFilter] = useState('')


  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const onFormSubmit = ({ name, number }) => {
    setContacts(prevContacts => {
      const currName = name;

      if (prevContacts.find(({ name }) => name === currName)) {
        return alert(`${name} is already in contacts`);
      }
      return([{ name, number }, ...prevContacts]) 
    });
  };

  const visibleContacts = names => {
    if (names.length === 0) {
      return [];
    }

    return names.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleChange = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const finalContacts = visibleContacts(contacts);

  const onDeleteName = currName => {
    const newCont = [];
    contacts.map(contact => {
      if (currName === contact.name) {
        return {};
      }
      return newCont.push(contact);
    });
    setContacts(newCont);
  };

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onFormSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleChange} />
        <ContactList
          visibleContacts={finalContacts}
          onDeleteName={onDeleteName}
        />
      </Container>
    );
}
