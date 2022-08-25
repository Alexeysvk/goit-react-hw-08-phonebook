import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from 'redux/phonebook/selectors';
import { Notify } from 'notiflix';
import s from './ContactForm.module.css';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    const repeatName = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (!repeatName) {
      Notify.success(`${name} is added in contacts`);
      dispatch(addContacts({ name, number }));
      setNumber('');
      setName('');
      return;
    }
    Notify.warning(`${name} is already in contacts`);
  };

  return (
    <form onSubmit={formSubmit} className={s.formWrap}>
      <label className={s.inputWrap}>
        <span className={s.label}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={s.inputWrap}>
        <span className={s.label}>Phone</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={s.button} type="sabmit">Add Contact</button>
    </form>
  );
};



export default ContactForm;