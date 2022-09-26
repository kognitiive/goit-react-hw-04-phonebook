import { ContactListStl, ListItem, Button, Text } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ visibleContacts, onDeleteName }) => {
  return (
    <ContactListStl>
      {visibleContacts.map(({ name, number }) => {
        return (
          <ListItem key={name}>
            <Text>
              {name}: {number}
            </Text>
            <Button type="button" onClick={() => onDeleteName(name)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ContactListStl>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteName: PropTypes.func.isRequired,
};

export default ContactList;
