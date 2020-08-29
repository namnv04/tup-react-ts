import React, { useEffect } from 'react';
import {
  Grid,
  Container,
  Box,
  Button,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';
import logo from '../logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IAppState } from '../store/reducers';
import { resendEmail } from '../store/actions';
import { getResendEmailPending } from '../store/selectors';

const useStyles = makeStyles({
  body: {
    padding: '100px 0 0 0',
  },
  button: {
    margin: '20px 0 0 0',
    background: '#333',
    border: 0,
    borderRadius: 6,
    color: 'white',
    height: 30,
    padding: '0 30px',
    width: '200px',
    textTransform: 'capitalize',
  },
  welcomeText: {
    fontSize: '55px',
  },
});

function VerificationPage({
  resendEmail,
  getResendEmailPending,
}: {
  resendEmail: Function;
  getResendEmailPending?: boolean;
}) {
  const classes = useStyles();
  useEffect(() => {
    document.title = 'Verify';
    // Update the document title using the browser API
    document.body.classList.add('linear-background');
    return function cleanup() {
      document.body.classList.remove('linear-background');
    };
  });

  return (
    <React.Fragment>
      <Container maxWidth="sm" className={classes.body}>
        <Box textAlign="center">
          <img src={logo} alt="Logo" />
        </Box>
        <Box textAlign="center">
          <h3>TRACK UNDERSTAND PREDICT</h3>
        </Box>
        <Box textAlign="center" py={4}>
          <h1 className={classes.welcomeText}>WELCOME</h1>
        </Box>
        <Box textAlign="center">
          <p>We've sent you a verification email.</p>
        </Box>

        <Box textAlign="center">
          <p>Please click the verification link and sign into TUP-e-comm.</p>
        </Box>
        <Grid container justify="center">
          <Box textAlign="center">
            <Button
              onClick={() => resendEmail()}
              type="button"
              className={classes.button}
              disabled={getResendEmailPending === true}
            >
              {getResendEmailPending !== true && 'Resend the Email'}
              {getResendEmailPending === true && <CircularProgress size={18} />}
            </Button>
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export const mapStateToProps = (state: IAppState) => ({
  getResendEmailPending: getResendEmailPending(state),
});

export const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  resendEmail: (data: any) => dispatch(resendEmail(ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VerificationPage)
);
