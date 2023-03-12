import React from 'react';
import { FilterDiv } from './Filter.styled';
import { addFilter } from '../../redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const getFilter = e => {
    dispatch(addFilter(e.target.value));
  };
  const searchDebounced = AwesomeDebouncePromise(getFilter, 500);

  return (
    <FilterDiv>
      <TextField
        label="search name"
        variant="standard"
        type="text"
        name="filter"
        id="filter"
        onChange={searchDebounced}
      />
    </FilterDiv>
  );
};

export default Filter;
