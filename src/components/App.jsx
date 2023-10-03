import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { MainTitle, Title } from './App.styled';


const App = () => {
  const [contacts, setContacts]=useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ])
  const[filter,setFilter]=useState('')

  // Add new contact+checkContact in Phonebook
  const addContactWithForm = data => {
    const checkContact = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    // console.log(checkContact);
    checkContact
      ? alert(`${data.name} is already exists`)
      : this.setState(prevState => ({
          contacts: [{ id: nanoid(), ...data }, ...prevState.contacts],
        }));
  };



  return (
    <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContactWithForm} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Title>Contacts</Title>

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
  )
}

export default App










export default class OldApp extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
  // Add new contact+checkContact in Phonebook
  addContactWithForm = data => {
    const checkContact = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    // console.log(checkContact);
    checkContact
      ? alert(`${data.name} is already exists`)
      : this.setState(prevState => ({
          contacts: [{ id: nanoid(), ...data }, ...prevState.contacts],
        }));
  };
  // Delete Contact
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    console.log(evt.currentTarget.value);
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(contacts);
    if (contacts) {
      this.setState({
        contacts: contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContactWithForm} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <Title>Contacts</Title>

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
