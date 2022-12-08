import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  notifySuccessAddedContactInfo,
  notifySuccessEditedInfo,
  notifySuccessRemovedInfo,
  notifyError,
} from '../notificationMessages/notificationMessages';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      notifyError();
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      notifySuccessAddedContactInfo(data.name);
      return data;
    } catch (error) {
      notifyError();
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      notifySuccessRemovedInfo(data.name);
      return data;
    } catch (error) {
      notifyError();
      return rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${contact.id}`, {
        name: `${contact.name}`,
        number: `${contact.number}`,
      });
      notifySuccessEditedInfo(data.name);
      return data;
    } catch (error) {
      notifyError();
      return rejectWithValue(error.message);
    }
  }
);
