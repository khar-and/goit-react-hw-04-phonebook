import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // Generate random ID
  nameIdInput = nanoid();
  numberIdInput = nanoid();

  handleChangeInput = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <Label htmlFor={this.nameIdInput}>
          Name{' '}
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            onChange={this.handleChangeInput}
          />
        </Label>
        <Label htmlFor={this.numberIdInput}>
          Number{' '}
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            required
            onChange={this.handleChangeInput}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
