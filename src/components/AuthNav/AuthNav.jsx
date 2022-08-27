import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  const activeLink = ({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link);
  return (
    <div className={s.auth__nav}>
      <NavLink to="/signIn" className={activeLink}>
        Sign In
      </NavLink>
      <NavLink to="/signUp" className={activeLink}>
        Sign Up
      </NavLink>
    </div>
  );
}