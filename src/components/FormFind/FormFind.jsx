import { Component } from "react";
import PropTypes from 'prop-types';
import css from "./FormFind.module.css"

// import css from './FormFind.module.css';



class FormFind extends Component {

    render() {
        return <form className={css.form} >
            <label className={css.label}>Find contacts by name</label>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.value}
                onChange={this.props.handleChange}
            />
        </form>
    }
}

FormFind.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,

}

export default FormFind;