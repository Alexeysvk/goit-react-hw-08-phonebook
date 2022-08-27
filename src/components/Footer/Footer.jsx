import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer__box}>
      <p className={s.footer__text}>Phonebook © 2021 - 2022</p>
      <p className={s.footer__text}>All rights reserved</p>
    </footer>
  );
};

export default Footer;