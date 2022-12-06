import * as React from 'react';                                                       
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id) {
    return { id};
  }
//DB 구성 전 임시 데이터 삽입
const cards = [
createData(1),
createData(2),
createData(3),
 ];
 
export default function Detail_Reject_User() {

  return (
  <Container component={Paper}>
        <Grid container spacing={2}>
            {cards.map((item, index) => (
              <Grid item key={index} xs={12} md={2}>

                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                        {item.id}
                        <CardMedia
                            component="img"
                            image="https://picsum.photos/250/250"
                            alt="random"
                        />
                    <CardActions>
                    <FormGroup aria-label="position" row>
                    <FormControlLabel disabled control={<Checkbox defaultChecked size="small"/>} label="반려" />       
                        </FormGroup>
                    </CardActions>
                    </Card>
             </Grid>
            ))}
          </Grid>
    </Container>
  );
}


// 체크해서 반려 하면 디테일화면에서는 disabled(defaultChecked)로 바뀌어있게 하면 될듯 그리고 동일 카드를 반려 화면에 복사되게끔
//<FormControlLabel disabled control={<Checkbox defaultChecked size="small"/>} label="반려" /> 