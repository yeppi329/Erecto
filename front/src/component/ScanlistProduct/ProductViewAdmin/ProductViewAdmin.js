import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import ProductViewRejectModal from './ProductViewRejectModal';

const ColorButton = styled(Button)(({ }) => ({
  backgroundColor: '#FF0000',
  '&:hover': {
    backgroundColor: '#c62828',
  },
}));

function GetData(label) {

  const [data, setData] = useState({});
  // axios.get('http://localhost:3001/product/'+label)
  useEffect(() => {
    axios.get('http://localhost:3001/product').then((response) => {
      setData(response.data);
      console.log(response.data, "response.data")
    })
  }, []);

  const [isChecked, setIschecked] = useState(false); // 체크여부
  const [checkedItem, setCheckedItem] = useState(new Set()); // 체크된 아이템
  const checkHandler = ({ target }) => {
    setIschecked(!isChecked);
    //console.log(target, "target");
    checkedItemHandler(target.value, target.checked);
  };

  const checkedItemHandler = (src, isChecked) => {
    if (isChecked) {
      checkedItem.add(src); // 해당 id저장(input value값 삽입)
      setCheckedItem(checkedItem); // 체크 요소 넣어주기
      console.log(checkedItem, "Check item");
    }
    // 체크가 안되었고, 해당 체크박스 두번 누를경우
    else if (!isChecked && checkedItem.has(src)) {
      checkedItem.delete(src); // 체크 두번일 경우 삭제
      setCheckedItem(checkedItem);
      console.log(checkedItem, "Delete item");
    }
    return checkedItem;
  }

  // console.log(data,"item 들어가기전 데이터");
  // console.log(Object.values(data),"item 들어가기전 Object.values(data)");
  const item = (Object.values(data)).map((img) => (
    img.view === "on" ?
      <Card variant="outlined" key={img.src}
        sx={{ width: '15%', hight: 'auto', display: 'flex', flexDirection: 'column', my: 1 }}>
        <CardActions>
          {img.id}
          <Typography level="h2" fontSize="md" >
            .
          </Typography>
        </CardActions>
        <img
          src={img.src}
          alt="img"
          height="auto"
          width="100%"

        />
        <FormControlLabel
          value={img.src}
          control={<Checkbox value={img.src || ''} onChange={(e) => checkHandler(e)} />}
          label="선택"
          labelPlacement="end"
          sx={{ ml: 1 }}
        />
      </Card>
      : <Card variant="outlined" key={img.src}
        sx={{ width: '15%', hight: 'auto', display: 'flex', flexDirection: 'column', my: 1 }}>
        <CardActions>
          {img.id}
          <Typography level="h2" fontSize="md" >
            .
          </Typography>
        </CardActions>
        <img
          src={img.src}
          alt="img"
          height="auto"
          width="100%"

        />
        <FormControlLabel
          value={img.src}
          control={<Checkbox disabled checked value={img.src || ''} onChange={(e) => checkHandler(e)} />}
          label="반려"
          labelPlacement="end"
          sx={{ ml: 1 }}
        />
      </Card>
  ));

  return item;
}

function VocView() {
  const { vocId } = useParams();
  const item = GetData();

  return (
    <Box className="contents" sx={{ display: 'flex' }} >

      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
        <ProductViewRejectModal />
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          { /* 사진카드 */}
          <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }} >
            {item}
          </Grid>
        </Paper>
      </Container>
    </Box>

  );
}

export default VocView;