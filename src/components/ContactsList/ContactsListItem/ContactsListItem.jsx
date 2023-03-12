import React from 'react';
import { SpanItem } from './ContactsListItem.styled';

import { useDeleteContactMutation } from '../../../redux/contacts/contacts';
import { Item } from '../ContactsList.styled';
import Button from '@mui/material/Button';

const ContactsListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <SpanItem>{name}</SpanItem>
      <SpanItem>{number}</SpanItem>
      <Button sx={{ ml: 2 }} onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};

export default ContactsListItem;
