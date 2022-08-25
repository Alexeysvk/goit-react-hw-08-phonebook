import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import {
  deleteContacts,
  fetchContacts,
  getVisibleContacts,
} from '../../redux/phonebook/selectors';
import { useEffect } from 'react';


export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContactCard = id => {
    dispatch(deleteContacts(id));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.contactsItem} key={id}>
          <span className={s.contactText}>
            {name} : {phone}
          </span>
          <button
            type="button"
            onClick={() => onDeleteContactCard(id)}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}