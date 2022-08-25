import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './Contacts';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;