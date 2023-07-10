
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


function Main(props) {
  const isLogin = props.isLogin
  const navigate = useNavigate();

  const onClickNotion = () => {
    navigate("/home");
  };
  const onClickMonth = () => {
    navigate("/month");
  };
  const onClickReject = () => {
    navigate("/reject");
  };
  const onClickMypage = () => {
    navigate("/mypage");
  };

  return (
    <div>
      <List component="nav">
        <ListItemButton onClick={onClickNotion}>
          <ListItemIcon>
            <WindowSharpIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={onClickMonth}>
          <ListItemIcon>
            <FormatListBulletedSharpIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Scanlist" />
        </ListItemButton>
        <ListItemButton onClick={onClickReject}>
          <ListItemIcon>
            <ThumbDownSharpIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Reject" />
        </ListItemButton>
        <ListItemButton onClick={onClickMypage}>
          <ListItemIcon>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Mypage" />
        </ListItemButton>
      </List>
    </div>
  )
}

export default Main;