import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Forms/ContactForm';
import data from '../data.json';
import { Filter } from './Filter/Filter';

import ContactsList from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  componentDidMount() {
    const stringiContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringiContacts) ?? [];
    this.setState({
      contacts: parsedContacts,
    })
}

 componentDidUpdate(_, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      const stringiContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringiContacts);
    }
  }

  createContacts = data => {
    const newContacts = {
      ...data,
      id: nanoid(),
    };
    const isDuplicated = this.state.contacts.find(el => el.name === data.name);
    if (isDuplicated) return alert(`${data.name} is already in contact.`);

    this.setState(prev => ({
      contacts: [...prev.contacts, newContacts],
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  deleteContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

 

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <sector
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

            height: '100vh',
          }}
        >
          <h1>Phonebook</h1>
          <ContactForm createContacts={this.createContacts} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactsList
            deleteContacts={this.deleteContacts}
            contacts={filteredContacts}
          />
        </sector>
      </>
    );
  }
}
