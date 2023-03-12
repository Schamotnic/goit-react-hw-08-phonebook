import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Form from '../../components/Form';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';
import { Wrapper } from '../../components/UserMenu/UserMenu.styled';

export default function PhonebookPage() {
  return (
    <Wrapper>
      <Form />
      <ContactsList />
      <Filter />
      <ToastContainer theme="colored" autoClose={500} />
    </Wrapper>
  );
}
