import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter ,Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Home from './pages/Home';
import Voc from'./pages/voc/Voc';
import VocView from'./pages/voc/VocWrite';
import VocWrite from './pages/voc/VocWrite';
import DrawerList  from './components/Drawlist';
import MonthlistTable from './components/Monthlist'
import Admin_Reject from './pages/Reject/Admin_Reject';
import User_Reject from './pages/Reject/User_Reject';
import Detail_admin from './pages/Detail/Detail_admin';
import Detail_user from './pages/Detail/Detail_user'

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



  
function App() {

		return (
			<div>
				<BrowserRouter>
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
		</BrowserRouter>
		  </div>
		);

}

export default App;