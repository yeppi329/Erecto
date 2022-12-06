import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';


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

	const [isLogin, setIsLogin] = useState(true);
 
	useEffect(() => {
	
	})
   
		return (
			<div>
			{isLogin ? 
				// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
			  	<Main isLogin={isLogin} /> : 
			  <Login />}
		  </div>
		);

}

export default App;