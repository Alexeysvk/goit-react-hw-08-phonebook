import { useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import { logout } from '../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const login = useSelector(getUserName);

  return (
    <div className={s.user__menu}>
      <h2 className={s.welcome__user}>Welcome, {login}</h2>
      <button type="button" className={s.logout__button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}