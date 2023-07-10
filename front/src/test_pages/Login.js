import { Navigate, useNavigate } from "react-router";
import React, { useEffect, useState} from 'react';   
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://www.arbeon.com/" >
        Arbeon
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

export default function Login() {
  const Navigate = useNavigate();
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const handleInputId = (e) => {
      setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
      setInputPw(e.target.value)
  }

  const onClickLogin = () => {
      console.log('click login')
      console.log('ID : ', inputId)
      console.log('PW : ', inputPw)
      axios.get('http://localhost:3001/loginCheck')
      .then(res => {
          console.log(res)
          console.log('res.data[0]:: ', res.data[0])
          if(res.data.length>0 ){
              // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
              console.log('===========res.data[0].user_Id===========',res.data[0].role)
              alert('로그인')
              localStorage.setItem('user_id', inputId,)
          } 
          Navigate('/home');
      })
      .catch()
  }

   useEffect(() => {
       axios.get('http://localhost:3001/user')
       .then(res => console.log(res))
       .catch()
   },[])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img alt = "Arbeon" src={'./img/logo.png'} style={{ width: '70%'}} /> 

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
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