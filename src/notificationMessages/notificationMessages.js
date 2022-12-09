import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccessAddedContactInfo = text => {
  toast.success(`Contact "${text}" is added to contacts!`);
};

export const notifySuccessRemovedInfo = text => {
  toast.info(`Contact "${text}" is deleted from contacts!`);
};

export const notifySuccessEditedInfo = text => {
  toast.info(`Contact "${text}"  is edited!`);
};

export const notifyErrorIfNewContactAlreadyExists = text => {
  toast.error(`Contact "${text}" already exists in contacts!`);
};

export const notifyError = () => {
  toast.error(`Sorry, something went wrong!`);
};

export const notifyErrorLogin = () => {
  toast.error(
    `Something went wrong! Сheck if the login and password are entered correctly.`
  );
};

export const notifyErrorRegister = () => {
  toast.error(`Something went wrong! Try with other email.`);
};
