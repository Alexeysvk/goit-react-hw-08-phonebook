import Contacts from '../../components/Contacts/Contacts';
import Phonebook from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter';

export default function PhonebookPage() {
  return (
    <section>
      <Phonebook />
      <Filter />
      <Contacts />
    </section>
  );
}