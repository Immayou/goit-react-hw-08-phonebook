import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { authSlice } from './authSlice';
import { filterSlice } from './filterSlice';
import { contactsApi } from './contactsAPISlice';

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  auth: authSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
