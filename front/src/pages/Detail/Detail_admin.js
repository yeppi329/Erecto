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
import Paper from '@mui/material/Paper';

function createData(id) {
    return { id};
  }
//DB 구성 전 임시 데이터 삽입
const cards = [
createData(1),
createData(2),
createData(3),
createData(4),
createData(5),
createData(6),
createData(7),
createData(8),
createData(9),
createData(10),
createData(11),
createData(12),
createData(13),
createData(14),
createData(15),
createData(16),
createData(17),
createData(18),
createData(19),
createData(20),
createData(21),
createData(22),
createData(23),
createData(24),
createData(25),
createData(26),
createData(27),
createData(28),
createData(29),
createData(30),
createData(31),
createData(32),
createData(34),
createData(35),
createData(36),
createData(37),
createData(38),
createData(39),
createData(40),
createData(41),
createData(42),
createData(43),
createData(44),
createData(45),
createData(46),
createData(47),
createData(48),
createData(49),
createData(50), 
 ];
 
export default function Detail_admin() {
 
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
                <FormControlLabel control={<Checkbox size="small" />} label="반려" /> 
                <FormControlLabel control={<Checkbox size="small" />} label="이동" />
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

                        