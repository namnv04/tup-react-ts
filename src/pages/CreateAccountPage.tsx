import React, { useState, FormEvent, useEffect } from 'react';
import {
  Grid,
  Container,
  Box,
  createStyles,
  withStyles,
  Theme,
  InputBase,
  fade,
  Button,
  makeStyles,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from '@material-ui/core';
import logo from '../logo.png';
import { connect } from 'react-redux';
import { createAccountSubmit } from '../store/actions';
import { IAppState } from '../store/reducers';
import { getCreateAccountSubmitPending } from '../store/selectors';
import { withRouter } from 'react-router-dom';
import DialogComponent from '../shared/DialogComponent';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      color: '#666',
      margin: '20px 0 0 0',
      fullWidth: true,
      textAlign: 'center',
      borderRadius: 1,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #666',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
)(InputBase);

const useStyles = makeStyles({
  body: {
    padding: '100px 0 0 0',
  },
  button: {
    margin: '20px 0 0 0',
    background:
      'linear-gradient(to right, rgb(127,206,178),rgb(85,183,227),rgb(132,138,237),rgb(188,115,217),rgb(234,102,186),rgb(253,134,137))',
    border: 0,
    borderRadius: 5,
    color: 'white',
    height: 30,
    padding: '0 30px',
    width: '100%',
    textTransform: 'capitalize',
  },
});

function CreateAccountPage({
  createAccountSubmit,
  loading,
}: {
  createAccountSubmit: Function;
  loading?: Boolean;
}) {
  useEffect(() => {
    document.title = 'Create New Account';
  });

  const classes = useStyles();
  const [state, setState] = useState({
    emailAddress: '',
    password: '',
    confirmPassword: '',
    touChecked: false,
    isDialogOpen: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !state.emailAddress.trim() ||
      !state.password.trim() ||
      !state.confirmPassword.trim()
    ) {
      setState({ ...state, ...{ isDialogOpen: true } });
      return;
    }

    createAccountSubmit(state);
  };

  const handleDialogClose = () => {
    setState({ ...state, ...{ isDialogOpen: false } });
  };

  return (
    <React.Fragment>
      <DialogComponent
        title="Error"
        body="Please enter email and password"
        isOpen={state.isDialogOpen}
        handleClose={handleDialogClose}
      />
      <Container maxWidth="sm" className={classes.body}>
        <Box textAlign="center">
          <img src={logo} alt="Logo" />
        </Box>
        <Box textAlign="center">
          <h3>TRACK UNDERSTAND PREDICT</h3>
        </Box>
        <Box pt={4}>
          <form onSubmit={handleSubmit}>
            <Grid container justify="center" className="form">
              <Grid item xs={12} sm={8} md={8}>
                <BootstrapInput
                  fullWidth={true}
                  placeholder="emailAddress@mail.com"
                  id="email"
                  value={state.emailAddress}
                  onChange={(e) =>
                    setState({ ...state, ...{ emailAddress: e.target.value } })
                  }
                />
                <BootstrapInput
                  fullWidth={true}
                  placeholder="**********"
                  id="password"
                  value={state.password}
                  onChange={(e) =>
                    setState({ ...state, ...{ password: e.target.value } })
                  }
                />
                <BootstrapInput
                  fullWidth={true}
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  value={state.confirmPassword}
                  onChange={(e) =>
                    setState({
                      ...state,
                      ...{ confirmPassword: e.target.value },
                    })
                  }
                />
                <Box textAlign="center">
                  <Button
                    type="submit"
                    disabled={loading === true || state.touChecked === false}
                    className={classes.button}
                  >
                    {loading === false && 'Create New Account'}
                    {loading === true && <CircularProgress size={18} />}
                  </Button>
                </Box>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.touChecked}
                      onChange={() =>
                        setState({
                          ...state,
                          ...{ touChecked: !state.touChecked },
                        })
                      }
                      name="tou"
                    />
                  }
                  label="I agree to the term of service."
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export const mapStateToProps = (state: IAppState) => ({
  loading: getCreateAccountSubmitPending(state),
});

export const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  createAccountSubmit: (data: any) =>
    dispatch(createAccountSubmit(data, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateAccountPage)
);
