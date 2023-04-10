import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FormContacts.module.css';

class FormPhonebook extends Component {
    state = {
        name: "",
        number: "",
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    reset() {
        this.setState({ name: "", number: "", });
    };

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit({ ...this.state });
        this.reset()

    }

    render() {
        return (
            <>

                {/* <h2>Name</h2> */}
                <form className={css.form} onSubmit={this.handleSubmit} >
                    <label className={css.label}>
                        <span className={css.labelText}>Name</span>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={css.label}>
                        <span className={css.labelText}>Number</span>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className={css.button} type="submit">Add contact</button>
                </form>
            </>
        );
    }
}

FormPhonebook.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default FormPhonebook;