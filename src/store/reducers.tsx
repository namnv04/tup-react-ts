import AT from './action-types';

export interface IUserData {
  emailAddress: string;
  password: string;
}
export interface IAppState {
  createAccountSubmitPending: boolean;
  createAccountSubmitSuceeded?: boolean;
  userData?: IUserData;
  resendEmailPending?: boolean;
}
const initialState: IAppState = {
  createAccountSubmitPending: false,
};

export default (state: IAppState = initialState, action: any) => {
  let newState: IAppState;
  switch (action.type) {
    case AT.APP_CREATE_ACCOUNT_SUBMIT:
      newState = {
        ...state,
        createAccountSubmitPending: true,
      };
      break;
    case AT.APP_CREATE_ACCOUNT_SUCCESS_RESPONSE:
      newState = {
        ...state,
        createAccountSubmitPending: false,
        createAccountSubmitSuceeded: true,
        userData: action.payload,
      };
      break;
    case AT.APP_RESEND_EMAIL:
      newState = {
        ...state,
        resendEmailPending: true,
      };
      break;
    case AT.APP_RESEND_EMAIL_SUCCESS:
      newState = {
        ...state,
        resendEmailPending: false,
      };
      break;
    default:
      newState = state;
  }
  return newState;
};
