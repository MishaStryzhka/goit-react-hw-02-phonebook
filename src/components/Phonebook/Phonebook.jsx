import { Component } from "react";
import { nanoid } from "nanoid";

import FormContacts from "components/FormContacts/FormContacts";
import FormFind from "components/FormFind/FormFind";
import css from './Phonebook.module.css';

class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    onSubmit = (name) => {
        const newUser = { id: nanoid(), ...name }
        return this.setState((prefState) => ({ ...prefState, contacts: [...prefState.contacts, newUser] }))
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    getVizibleContacts = () => {
        const { contacts, filter } = this.state;

        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    }

    render() {
        return (
            <>
                <h1 className={css.title}>Phonebook</h1>

                <FormContacts onSubmit={this.onSubmit} name />

                <h2 className={css.title}>Contacts</h2>

                <FormFind handleChange={this.handleChange} value={this.state.filter} />

                <ul className={css.contactsList}>
                    {this.getVizibleContacts().map((contact) => <li className={css.item} key={contact.id}>{contact.name} {contact.number}</li>)}
                </ul>
            </>
        );
    };

}

export default Phonebook;