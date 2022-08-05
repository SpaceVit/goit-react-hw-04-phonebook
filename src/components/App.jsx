import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { Container } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addToContact = ({ name, number }) => {
    const lowerCasedName = name.toLowerCase();

    let added = contacts.find(
      contact => contact.name.toLowerCase() === lowerCasedName
    );

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (added) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  const deleteContact = deleteContactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deleteContactId)
    );
  };

  const renderCondition = () => {
    if (contacts.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Box as="main" py={3} width="100%">
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={addToContact} />

        {renderCondition() ? (
          <>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
              contacts={filteredContacts()}
              onDeleteContact={deleteContact}
            />
          </>
        ) : (
          'There is no contacts'
        )}
      </Container>
    </Box>
  );
}
