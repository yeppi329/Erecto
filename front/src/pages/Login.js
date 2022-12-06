import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://mergerity.co.kr/" >
        MergeRity
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

function Login() {
  

  const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
    const handleInputId = (event) => {
        setInputId(event.currentTarget.value)
    };
    console.log(inputId);
 
    const handleInputPw = (event) => {
        setInputPw(event.currentTarget.value)
    };
    console.log(inputPw);

    const onClickLogin = () => {
      console.log('click login')
      console.log('ID : ', inputId)
      console.log('PW : ', inputPw)
      axios.post('http://localhost:3000/onLogin', null, {
          params: {
          'user_id': inputId,
          'password': inputPw
          }
      })
      .then(res => {
          console.log(res)
          if(res == 'success')
          {
            alert('로그인 성공')
          }
          document.location.href = '/home'
          
          
      })
      .catch()
  }

   useEffect(() => {
       
   },[])


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
          <img alt = "Mergy" src={'../img/logo-orange.png'} style={{ width: '130%' }} />
          <Avatar sx={{ m: 1, width: 56, height: 56, mt: 3}}> 
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              type = 'text'
              margin="normal"
              required
              fullWidth
              name='input_id' value={inputId} onChange={handleInputId}
              autoFocus
            />
            <TextField
              type = 'password'
              margin="normal"
              required
              fullWidth
              name='input_pw' value={inputPw} onChange={handleInputPw} 
            />
            <Button
              fullWidth
              variant="contained"
              onClick={onClickLogin}
              sx={{ mt: 2, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="http://mergerity.co.kr/" variant="body2"> 
                  계정관련 문의는 MergeRity 관계자에게 연락바랍니다.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default Login;