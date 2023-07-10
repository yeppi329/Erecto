import 'react-notion/src/styles.css';
import axios from 'axios';
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';


function ReactNotion() {

  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = 'ver-1-3-e9ef178ef5a3455e99fe672607908a40';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  const notionpage = (
    Object.keys(response).length && (
      <NotionRenderer blockMap={response} />
    ));
  return notionpage;
}


function Notion() {
  const notionpage = ReactNotion();
  return (
    <Box className="contents" sx={{ display: 'flex' }} >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
        <Paper
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {notionpage}
        </Paper>
      </Container>
    </Box>
  )
}
export default Notion;