
import axios from 'axios';
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '../Listitem';
import ProductView from './ProductViewUser/ProductView';
import ProductViewAdmin from './ProductViewAdmin/ProductViewAdmin';
import Swal from 'sweetalert2'

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://mergerity.co.kr/">
        Arbeon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


function Main(props) {
  const isLogin = props.isLogin
  const [open, setOpen] = React.useState(true);
  const [isRole, setIsRole] = useState(false) //admin만 true
  const toggleDrawer = () => {
    setOpen(!open);
  };
  // App 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.

  console.log(localStorage.getItem('user_id'), "localStorageuser_id")
  console.log(localStorage.getItem('role'), "localStoragerole")
  const onLogout = () => {
    Swal.fire({
      title: '로그아웃',
      text: localStorage.getItem('user_id') + " 로그아웃되었습니다.",
      icon: 'success',
      confirmButtonColor: '#ff1e05',
      confirmButtonText: '확인'
    }).then((result) => {
      if (result.isConfirmed) {
        document.location.href = '/'
      }
    })
    // localStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
    localStorage.removeItem('user_id')
    localStorage.removeItem('role')
    
    // alert('로그아웃')
    // // App 으로 이동(새로고침)
    // document.location.href = '/'
  }
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      // localStorage 에 role 라는 key 값으로 저장된 값이 admin이면 true
      setIsRole(true)
      console.log('isRole ?? :: ', isRole)
    } else {
      // localStorage 에 role 라는 key 값으로 저장된 값이 나머지면 false
      // 로그인 상태 변경
      console.log('isRole ?? :: ', isRole)
    }
  })
  return (
    <ThemeProvider theme={mdTheme}>
      <div>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar sx={{ pr: '24px', }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h4"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Arbeon
              </Typography>
              <LogoutIcon fontSize="large" onClick={onLogout} />
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <ListItem />
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid >
                {/* Chart */}
                {(localStorage.getItem('user_id').includes('admin')) ?
                  <ProductViewAdmin />   //isRole true 면 admin(반려 있음)
                  : <ProductView />        //isRole false면 반려 없는 페이지
                }
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  )
}

export default Main;