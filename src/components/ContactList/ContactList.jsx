import { ContactListStl, ListItem, Button, Text } from './ContactList.styled';

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
export default ContactList;
