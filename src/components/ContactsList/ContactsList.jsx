import { useGetContactsQuery } from '../../redux/contacts/contacts';
import { useSelector } from 'react-redux';
import React from 'react';
import ContactListItem from './ContactsListItem';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const { data } = useGetContactsQuery();
  const inputValue = useSelector(state => state.filter.value);
  const searchName = data?.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <List>
      {searchName?.map(contacts => {
        return (
          <ContactListItem
            key={contacts.id}
            id={contacts.id}
            name={contacts.name}
            number={contacts.number}
          />
        );
      })}
    </List>
  );
};
//===============start=============
export default ContactsList;
