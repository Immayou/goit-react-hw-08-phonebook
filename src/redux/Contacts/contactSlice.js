import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addNewContact,
  removeContact,
  editContact,
} from './operations';

const allActions = [fetchContacts, addNewContact, removeContact, editContact];

const getActions = type => allActions.map(action => action[type]);

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addNewContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const removeContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const editContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1, action.payload);
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addNewContact.fulfilled, addNewContactSuccessReducer)
      .addCase(removeContact.fulfilled, removeContactSuccessReducer)
      .addCase(editContact.fulfilled, editContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer);
  },
});
