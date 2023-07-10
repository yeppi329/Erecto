import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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
export default function VocHeader(checkedItem) {
  const categories = GetCategory(); //얘는 리스트 가져오는 카테고리
  const [beforecategory, setBeforeCategory] = useState('');  //얘는 수정할 카테고리
  const [changecategory, setChangeCategory] = useState('');  //얘는 수정할 카테고리

  //console.log("[requestPostBodyJson] : [request data] : " + JSON.stringify(checkedItem));

  const body = {
    label: beforecategory, //얘는 수정할 카테고리
    changelabel: changecategory //얘로 바꿀거임

  }
  const addbody = {
    label: beforecategory,
    changelabel: changecategory //얘 추가
  }
  const [open, setOpen] = React.useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleBefore = (event) => {
    setBeforeCategory(event.target.value);
    console.log('setBeforeCategory : ' + event.target.value);
  };
  const handleAfter = (event) => {
    setChangeCategory(event.target.value);
    console.log('setChangeCategory : ' + event.target.value);
  };
  const HandleModify = async ({ body }) => {
    const headers = {
      'Content-Type': 'application/json'
    }

    const response = await axios.post('http://localhost:3001/categories', body, { headers: headers }).then((response) => {
      console.log('response1 : ' + response);
      console.log('status1 : ' + response.status);
    }).catch((error) => {
      console.log('error1 : ' + error);
    });
    Swal.fire({
      title: '반려 해제 완료',
      icon: 'success',
      confirmButtonColor: '#ff1e05',
      confirmButtonText: '확인'
    }).then((result) => {
      if (result.isConfirmed) {
        document.location.href = '/reject'
      }
    })
  }

  return (
    <div>
      <Stack spacing={2} direction="row" sx={{ m: 1, justifyContent: "right" }}>
        <Button onClick={handleOpen} variant="contained" >상품 이동</Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
          <h2 id="modal-modal-title">반려된 사진 복구</h2>
          <h3>반려 체크를 해제합니다.</h3>
          <Stack spacing={2} direction="row" sx={{ m: 1, justifyContent: "left" }}>
            <Button color="primary" variant="outlined" onClick={() => {
              HandleModify({ body }); handleClose();
              
            }}>반려 해제</Button>
            <Button color="primary" variant="outlined" onClick={() => { handleClose(); }} >닫기</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}
