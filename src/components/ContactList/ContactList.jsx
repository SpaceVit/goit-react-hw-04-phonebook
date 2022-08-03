import PropTypes from 'prop-types';
import { List, Contact, Button, ContactData } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <Contact key={id}>
          <ContactData>
            {name}: <span>{number}</span>
          </ContactData>

          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
