import * as React from 'react';
import Home from '../pages/Home';
import Voc from'./voc/Voc';
import VocView from'./voc/VocWrite';
import VocWrite from './voc/VocWrite';
import DrawerList  from '../components/Drawlist';
import MonthlistTable from '../components/Monthlist'
import Admin_Reject from './Reject/Admin_Reject';
import User_Reject from './Reject/User_Reject';
import Detail_admin from './Detail/Detail_admin';
import Detail_user from './Detail/Detail_user'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login';


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


export default function Main(props) {
	const isLogin = props.isLogin
  return(
    <ThemeProvider theme={mdTheme}>
			<Box sx={{ display: 'flex' }}>
			<Router>
				<DrawerList/>
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
				<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/home' element={<Home />} />
						<Route path='/monthlist' element={<MonthlistTable />} />        
						<Route path='/user/reject' element={<User_Reject />}  />        
						<Route path='/admin/reject' element={<Admin_Reject />}  />         
						<Route path='/user/detail' element={<Detail_admin />}  />        
						<Route path='/admin/detail' element={<Detail_user />}  /> 
						<Route path='/voc' element={<Voc />} />
						<Route path='/voc/:vocId' element={<VocView />}  />  
						<Route path='/voc/write' element={<VocWrite />}  />

					</Routes>
					</Container>
					</Box>
			</Router>
        </Box>
    </ThemeProvider>
  );
}