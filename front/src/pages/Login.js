import { Navigate, useNavigate } from "react-router";
import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import axios from "axios";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://mergerity.co.kr/" >
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

function Login(props) {
  const isLogin = props.isLogin

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const body = {
    user_id: inputId,
    user_pw: inputPw
  }
  const onClickLogin = (e) => {
    e.preventDefault();
    if (!inputId) {
      return Swal.fire({
        title: '로그인 실패 ',
        text: '아이디를 입력하세요',
        icon: 'error',
        confirmButtonColor: '#ff1e05',
        confirmButtonText: '확인'
      })
    }
    else if (!inputPw) {
      return Swal.fire({
        title: '로그인 실패 ',
        text: '비밀번호를 입력하세요',
        icon: 'error',
        confirmButtonColor: '#ff1e05',
        confirmButtonText: '확인'
      })
    }
    console.log('click login')
    console.log('ID : ', inputId)
    console.log('PW : ', inputPw)
    axios.get('http://localhost:3001/loginCheck', body)
      .then(res => {
        console.log(res)
        console.log('res.data:: ', res.data)
        console.log('res.status:: ', res.status)
        if ((inputId.includes('user')) || (inputId.includes('admin'))) {//로그인 성공
          localStorage.setItem('user_id', inputId)
          console.log('===========localStorage_user_id===========', localStorage.getItem('user_id'))
          if (inputId.charAt(0) === 'u' && inputPw==='1111')  //임의로 유저와 어드민 구분
          {
            localStorage.setItem('role', 'user')
            console.log('===========localStorage_role===========', localStorage.getItem('role'))
            Swal.fire({
              title: '로그인 성공',
              text: localStorage.getItem('user_id') + "님 환영합니다.",
              icon: 'success',
              confirmButtonColor: '#ff1e05',
              confirmButtonText: '확인'
            }).then((result) => {
              if (result.isConfirmed) {
                document.location.href = '/home'
              }
            })
          
            //alert( localStorage.getItem('user_id')+'님 반갑습니다.')
            //alert('일반 유저 로그인')
            // 작업 완료 되면 페이지 이동(새로고침)
            // document.location.href = '/home'
          } else if (inputId.charAt(0) === 'a' && inputPw==='1234') {
            localStorage.setItem('role', 'admin')
            console.log('===========localStorage_role===========', localStorage.getItem('role'))
            Swal.fire({
              title: '로그인 성공',
              text: localStorage.getItem('user_id') + " 관리자로 로그인",
              icon: 'success',
              confirmButtonColor: '#ff1e05',
              confirmButtonText: '확인'
            }).then((result) => {
              if (result.isConfirmed) {
                document.location.href = '/home'
              }
            })
            // alert('관리자 로그인')
            // document.location.href = '/home'
          }else {
            // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
            console.log('====로그인 실패')
              Swal.fire({
                title: '로그인 실패 ',
                text: "아이디와 비밀번호가 일치하지 않습니다.",
                icon: 'error',
                confirmButtonColor: '#ff1e05',
                confirmButtonText: '확인'
              }).then((result) => {
                if (result.isConfirmed) {
                  document.location.href = '/'
                }
              })
          }
        }
        
      })
      .catch()
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("./img/this22.png")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: '75%',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 25,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img alt="Arbeon" src={'./img/Arbeon.png'} style={{ width: '20%' }} />
            <img alt="Arbeon" src={'./img/logo.png'} style={{ width: '30%' }} />
            <Box component="form" noValidate sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                fullWidth
                type='text'
                name='input_id'
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                autoFocus
                placeholder="아이디를 입력하세요."
              />
              <TextField
                sx={{ mt: 0 }}
                margin="normal"
                fullWidth
                type='password'
                name='input_pw'
                autoComplete="current-password"
                value={inputPw}
                onChange={(e) => setInputPw(e.target.value)}
                placeholder="비밀번호를 입력하세요."
              />
              <Button
                type='button'
                onClick={onClickLogin}
                sx={{ mt: 1 }}
                variant="contained"
                fullWidth>
                로그인
              </Button>
              <Grid container>
                <Grid item xs sx={{ mt: 1 }}>
                  <Link href="https://arbeon-us.imweb.me/" variant="body2">
                    계정 관련 문의
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  )
}

export default Login;