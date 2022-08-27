import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import {
  deleteContacts,
  fetchContacts,
  getVisibleContacts,
} from '../../redux/phonebook/selectors';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(getIsLoggedIn);

  const onDeleteContactCard = id => {
    dispatch(deleteContacts(id));
  };

  useEffect(() => {
    if (!loggedIn) {
      return navigate('/signIn');
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactsItem} key={id}>
          <span className={s.contactText}>
            {name} : {number}
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