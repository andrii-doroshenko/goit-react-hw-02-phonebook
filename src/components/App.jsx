import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import UserForm from './UserForm/UserForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
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
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  getElId = () => nanoid(5);

  handleAddContact = (name, number) => {
    const id = this.getElId();
    const newContact = { id, name, number };

    // Проверяем, есть ли уже контакт с таким именем
    const isNameAlreadyExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameAlreadyExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <UserForm onAddContact={this.handleAddContact}></UserForm>

          <h2>Contacts</h2>
          <Filter
            value={filter}
            onFilterChange={this.handleFilterChange}
          ></Filter>

          {contacts.length > 0 && (
            <Contacts
              filterId={this.getElId}
              filteredContacts={filteredContacts}
              onDeleteContact={this.handleDeleteContact}
            ></Contacts>
          )}
        </Section>
      </>
    );
  }
}

export default App;
