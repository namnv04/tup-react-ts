import { IAppState } from './reducers';

export const getCreateAccountSubmitPending = (state: IAppState) => {
  return state.createAccountSubmitPending;
};
export const getResendEmailPending = (state: IAppState) => {
  return state.resendEmailPending;
};
