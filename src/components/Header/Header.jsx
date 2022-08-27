import s from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header__box}>
      <nav className={s.navigation__box}>
        <Navigation />
        {loggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default Header;