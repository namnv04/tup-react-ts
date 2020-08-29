import React, { useEffect } from 'react';
import { Grid, Container, Box, Button, makeStyles } from '@material-ui/core';
import logo from '../logo.png';

const useStyles = makeStyles({
  body: {
    padding: '100px 0 0 0',
  },
  button: {
    margin: '20px 0 0 0',
    background: 'black',
    border: 0,
    borderRadius: 6,
    color: 'white',
    height: 30,
    padding: '0 30px',
    width: '100%',
    textTransform: 'capitalize',
  },
  welcomeText: {
    fontSize: '55px',
  },
});

export default function VerificationPage() {
  const classes = useStyles();
  useEffect(() => {
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
            <Button className={classes.button}>Create New Account</Button>
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
