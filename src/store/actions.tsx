import AT from './action-types';

export const createAccountSubmit = (data: any, ownProps: any) => (
  dispatch: any
) => {
  // Assume validation done in the component
  dispatch({
    type: AT.APP_CREATE_ACCOUNT_SUBMIT,
  });
  // Fake REST Call here
  setTimeout(() => {
    dispatch({
      type: AT.APP_CREATE_ACCOUNT_SUCCESS_RESPONSE,
      payload: data,
    });
    ownProps.history.push('/verify');
  }, 2000);
};

export const resendEmail = (ownProps: any) => (dispatch: any) => {
  dispatch({
    type: AT.APP_RESEND_EMAIL,
  });
  setTimeout(() => {
    dispatch({
      type: AT.APP_RESEND_EMAIL_SUCCESS,
    });
  }, 2000);
};
