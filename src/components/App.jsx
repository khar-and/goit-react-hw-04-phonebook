import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { MainTitle, Title } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Add new contact+checkContact in Phonebook
  const addContactWithForm = data => {
    const checkContact = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkContact) {
      alert(`${data.name} is already exists`);
      return;
    }

    setContacts(prevContacts => [{ id: nanoid(), ...data }, ...prevContacts]);

    // checkContact
    //   ? alert(`${data.name} is already exists`)
    //   : setContacts(prevContacts => [
    //   ...prevContacts,
    //   { id: nanoid(), ...data },
    // ]);
  };

  // Delete Contact
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={addContactWithForm} />
      <Filter value={filter} onChangeFilter={changeFilter} />
      <Title>Contacts</Title>

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
