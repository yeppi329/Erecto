import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

/**
 * 
 * @returns 유저의 상품리스트의 label(상품명)만 가져온다
 */
function GetCategory() {
  const [category, setCategory] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/tabledata').then((response) => {
      setCategory(response.data);
    })
  }, []);

  const categories = (Object.values(category)).map((item) => (
    <option key={item.id} value={item.label}>
      {item.label}
    </option>
  ));

  return categories;
}
/**
 * Monthlist에서 <상품명 변경>/<새로운 상품명 추가> 기능을 Header로 넣음
 * @returns Monthlist에 들어가는 버튼들 
 */
export default function VocHeader() {
  const categories = GetCategory(); //얘는 리스트 가져오는 카테고리
  const [beforecategory, setBeforeCategory] = useState('');  //얘는 수정할 카테고리
  const [changecategory, setChangeCategory] = useState('');  //얘는 수정할 카테고리

  const body = {
    label: beforecategory, //얘는 수정할 카테고리
    changelabel: changecategory //얘로 바꿀거임

  }
  const addbody = {
    label: beforecategory,
    changelabel: changecategory //얘 추가
  }
  const [open, setOpen] = React.useState(false);
  const [isModify, setIsModify] = useState(false); // 변경인지 추가인지 선택 구분용state
  /**Modal Open event*/
  const handleOpen = () => {
    setOpen(true);
  };
  /** Modal Close event */
  const handleClose = () => {
    setOpen(false);
  };
  /** 현재 내가 수정하려고 하는 상품명 선택*/
  const handleChange = (event) => {
    setBeforeCategory(event.target.value);
    console.log('event.target.value : ' + event.target.value);
  };
  /**수정사항 입력
  */
  const handleField = (event) => {
    setChangeCategory(event.target.value);
    console.log('event.target.value : ' + event.target.value);
  };
  /**
   * 
   * @param {true/false} param0 
   */
  const HandleModify = async ({ body }) => {
    const headers = {
      'Content-Type': 'application/json'
    }

    await axios.post('http://localhost:3001/categories', body, { headers: headers }).then((response) => {
      console.log('response : ' + response);
      console.log('status : ' + response.status);
    }).catch((error) => {
      console.log('error : ' + error);
    });

    if (isModify === true) {
      Swal.fire({
        title: '수정 완료',
        icon: 'success',
        confirmButtonColor: '#ff1e05',
        confirmButtonText: '확인'
      }).then((result) => {
        if (result.isConfirmed) {
          document.location.href = '/month'
        }
      })
    }
    else {

      Swal.fire({
        title: '추가 완료',
        icon: 'success',
        confirmButtonColor: '#ff1e05',
        confirmButtonText: '확인'
      }).then((result) => {
        if (result.isConfirmed) {
          document.location.href = '/month'
        }
      })

    }
  }
  return (
    <Grid>
      <Stack spacing={2} direction="row" sx={{ m: 1, justifyContent: "right" }}
        divider={<Divider orientation="vertical" flexItem />}>
        <Button size="large" variant="contained" onClick={() => { handleOpen(); setIsModify(true); }}   >상품명 변경</Button>
        <Button size="large" variant="contained" onClick={() => { handleOpen(); setIsModify(false); }}  >새로운 상품명 추가</Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {(isModify) ?
          <Box sx={{ ...style, width: 700 }}>
            <h2 id="modal-modal-title">상품 목록</h2>
            <h3>수정할 상품명을 선택하세요.</h3>
            <select
              value={beforecategory}
              onChange={handleChange}>
              {categories}
            </select>
            <p id="modal-modal-description">
              수정할 상품명 선택 후 수정사항을 아래에 입력해주세요.
            </p>
            <TextField
              id="outlined-multiline-static"
              multiline
              defaultValue={beforecategory}
              onChange={handleField}
              rows={3}
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Stack spacing={2} direction="row" sx={{ m: 1, justifyContent: "left" }}>
              <Button color="primary" variant="outlined" onClick={() => {
                HandleModify({ body }); handleClose();
              }}>상품명 수정</Button>
              <Button color="primary" variant="outlined" onClick={() => { handleClose(); }}>닫기</Button>
            </Stack>
          </Box>
          :
          <Box sx={{ ...style, width: 700 }} >
            <h2 id="modal-modal-title">상품 목록</h2>
            <h3>새로운 상품명 추가</h3>
            <p id="modal-modal-description">
              추가할 상품명을 아래에 작성해주세요.
            </p>
            <TextField
              id="outlined-multiline-static"
              label="입력란"
              multiline
              onChange={handleField}
              rows={3}
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Stack spacing={2} direction="row" sx={{ m: 1, justifyContent: "left" }}>
              <Button color="primary" variant="outlined" onClick={() => {
                HandleModify({ body }); handleClose();
              }}>상품명 추가</Button>
              <Button color="primary" variant="outlined" onClick={() => {
                handleClose();

              }}>닫기</Button>
            </Stack>
          </Box>
        }
      </Modal>
    </Grid>
  )
}
