import React, { useEffect, useState} from 'react';   
import { styled,useTheme } from '@mui/material/styles';        
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DrawerList from '../components/Drawlist';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF0000',
  '&:hover': {
    backgroundColor:'#c62828',
  },
}));

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3001/doitmonthlabel').then((response)=> {
      setData(response.data);
      console.log(response.data,"response.data")
    })
  }, []);


    const [isChecked, setIschecked] = useState(false); // 체크여부
    const [checkedItem, setCheckedItem] = useState(new Set()); // 체크된 아이템
    const [boolean,setBoolean] = useState(true);
    
    const checkHandler = ({target})=>{
      setIschecked(!isChecked);
      //console.log(target, "target");
      checkedItemHandler(target.value,target.checked);
    };

    const checkedItemHandler=(src,isChecked)=>{
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

    const item = (Object.values(data)).map((item,index) => (
      <Grid item key={index}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                  {index+1}
                  <CardMedia
                          component="img"
                          image ={item.src}
                          alt="img"
                          height="200"
                  />
                      
              <CardActions>
              <FormControlLabel
                  value={item.src}
                  control={<Checkbox value={item.src} onChange={(e)=>checkHandler(e)}/>}
                  label="이동"
                  labelPlacement="end"
                />
            </CardActions>
            </Card>
      </Grid>
     
    ));
  
    return item;
  }
  
export default function ProductView() {
 
    const item = GetData();

    const [isChecked, setIschecked] = useState(false); // 체크여부 체크되면 보여지기
    const [getlist,setData] =useState(new Set());

    
    const handleChange = (event) => {
      setIschecked(!isChecked);
      console.log(event.target.value, "event.target.value");
      checkedItemHandler(event.target.value,event.target.value.checked);
    };

    const checkedItemHandler=(title,isChecked)=>{
      if (isChecked) {
        getlist.add(title); // 해당 id저장(input value값 삽입)
        setData(getlist); // 체크 요소 넣어주기
        console.log(getlist, "getlist item");
      }
      // 체크가 안되었고, 해당 체크박스 두번 누를경우
      else if (!isChecked && getlist.has(title)) {
        getlist.delete(title); // 체크 두번일 경우 삭제
        setData(getlist);
        console.log(getlist, "Delete getlist item");
      }
      return getlist;
    }

  return (

    <Box className="form" sx={{ display: 'flex' }} >
    <DrawerList/>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 16, mb: 4 }} >
          <Grid container rowSpacing={1}>
            <Grid item xs={12} backgroundColor = "red">
            <Typography
                    variant="h4"
                    color="white"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                상품 리스트
              </Typography>
            </Grid>
              <FormControl sx={{ m: 1, minWidth: 700 }}>
              <InputLabel id="custom-select-label">이동할 위치를 선택하세요</InputLabel> 
                <Select                 
                  value={lists.title||''}
                  onChange={handleChange}
                  MenuProps={{
                    PaperProps: {style: {
                      maxHeight: 100 * 4.5 + 8,
                      //maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                      width: 250,
                    }}
                  }}
                  renderValue={(value) => value ? value : <em>Nothing Selected</em>}
                >
                  {lists.map((list) => (
                    <MenuItem
                      key={list.id}
                      value={list.title}
                    >
                      {list.id}
                      {" | "}
                      {list.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
                  <ColorButton 
                      variant="contained" 
                      size="large" 
                      //onClick={handleNext}
                      >
                        이동하기
                        </ColorButton>
              { /* 사진카드 */}
              <Grid container spacing={2}>
                {item}
              </Grid>
          </Grid>
      
				</Container>
    </Box>
  );
}


// 체크해서 반려 하면 디테일화면에서는 disabled(defaultChecked)로 바뀌어있게 하면 될듯 그리고 동일 카드를 반려 화면에 복사되게끔
//<FormControlLabel disabled control={<Checkbox defaultChecked size="small"/>} label="반려" /> 

                        