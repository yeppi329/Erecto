import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MonthlistTable } from './Monthlist';
import { Mypage } from './Mypage';
import { Detail_user } from './Detail_user';
import { Detail_admin } from '../pages/Detail/Detail_admin';
import { Detail_Reject } from './Detail_Reject';
import { Detail_Reject_User } from './User_Reject';
import { Home } from './Home';

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
        MergeRity
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
export default function Layer() {
  
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
            <Toolbar sx={{pr: '24px', }}>
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
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                로그인 후 제일 먼저 보이는 화면 / 메인화면
                </Typography>
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
                    <ListItemButton>
                      <ListItemIcon>
                        <WindowSharpIcon fontSize="large"/>
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                    <Divider /> 
                    <ListItemButton>
                      <ListItemIcon>
                        <FormatListBulletedSharpIcon fontSize="large"/>
                      </ListItemIcon>
                      <ListItemText primary="MonthList" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <ThumbDownSharpIcon fontSize="large"/>
                      </ListItemIcon>
                      <ListItemText primary="Reject" />
                    </ListItemButton>
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
                <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
                    <Detail_Reject_User/>
                  <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
    </ThemeProvider>
  );
}
