import React, { useState } from 'react';
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
} from '@material-ui/core';
import logo from '../logo.png';

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

export default function CreateAccountPage() {
  const classes = useStyles();
  const [state, setState] = useState({
    touChecked: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ touChecked: !state.touChecked });
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm" className={classes.body}>
        <Box textAlign="center">
          <img src={logo} alt="Logo" />
        </Box>
        <Box textAlign="center">
          <h3>TRACK UNDERSTAND PREDICT</h3>
        </Box>
        <Box pt={4}>
          <Grid container justify="center" className="form">
            <Grid item xs={12} sm={8} md={8}>
              <BootstrapInput
                fullWidth={true}
                placeholder="emailAddress@mail.com"
                id="email"
              />
              <BootstrapInput
                fullWidth={true}
                placeholder="**********"
                id="password"
              />
              <BootstrapInput
                fullWidth={true}
                placeholder="Confirm Password"
                id="confirmPassword"
              />
              <Box textAlign="center">
                <Button className={classes.button}>Create New Account</Button>
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.touChecked}
                    onChange={handleChange}
                    name="tou"
                  />
                }
                label="I agree to the term of service."
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
