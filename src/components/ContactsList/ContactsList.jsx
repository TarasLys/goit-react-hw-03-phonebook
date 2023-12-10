import Contacts from '../Contacts/Contacts';

const ContactsList = ({ contacts, deleteContacts }) => {
  return (
    <>
      {contacts.map(el => (
        <Contacts contacts={el} key={el.id} deleteContacts={deleteContacts} />
      ))}
    </>
  );
};
export default ContactsList;
