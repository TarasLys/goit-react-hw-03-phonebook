import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContacts(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={css.general}>
          <label htmlFor="">Name</label>
          <input
            className={css.allInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Введи ім'я для пошуку"
            required
          />
          <label htmlFor="">Number</label>
          <input
            className={css.allInput}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Введи номер телефону"
            required
          />
          <button className={css.btn} type="submit">
            Add contact
          </button>
          <ul>
            <li></li>
          </ul>
        </div>
      </form>
    );
  }
}
