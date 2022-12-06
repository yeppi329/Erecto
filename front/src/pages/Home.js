import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';

function Home() {


    const [response, setResponse] = useState({});
  
  useEffect(() => {
    const NOTION_PAGE_ID = 'ver-1-3-e9ef178ef5a3455e99fe672607908a40';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, [])
  
  return (
    <div className="contents">
    <Paper
        sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        }}
    > 
        <NotionRenderer
          blockMap={response}
        />
    </Paper>
    </div>
  );
    
}
  
  export default Home;