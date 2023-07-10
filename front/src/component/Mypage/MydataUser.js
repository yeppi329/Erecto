import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#FF0000',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const StyledTableFooter = styled(TableFooter)(({ theme }) => ({

  backgroundColor: theme.palette.action.hover,

}));
/**pagination table에서 페이지 이동 Action */
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(no, user_id, product_cnt, all_img_cnt, no_img_cnt, ok_img_cnt, img_price, money) {
  return {
    no, user_id, product_cnt, all_img_cnt, no_img_cnt, ok_img_cnt, img_price, money
  };
}

//DB 구성 전 임시 데이터 삽입
//특정 유저 페이지이기때문에 여기서는 rows에 하나만 있음
const rows = [
  createData(1, 'user1', 49, 17894, 3, 17891, 80, 1431520),

];
export default function Mypage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);//기본10칸씩 표시 

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (

    <Box className="contents" sx={{ display: 'flex' }} >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
        <Grid container spacing={2} disableEqualOverflow>
          <Grid sx={{ ml: 2, mt: 6 }}>
            <Typography variant="h6">
              {localStorage.getItem('user_id')}계정입니다.
            </Typography>
            <img alt="Arbeon" src={'./img/logo.png'} style={{ width: '50%' }} />

          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">No.</StyledTableCell>
                <StyledTableCell align="center">User_id</StyledTableCell>
                <StyledTableCell align="center">Product_cnt </StyledTableCell>
                <StyledTableCell align="center">All_img_cnt </StyledTableCell>
                <StyledTableCell align="center">NO_img_cnt </StyledTableCell>
                <StyledTableCell align="center">OK_img_cnt </StyledTableCell>
                <StyledTableCell align="center">Img_Price </StyledTableCell>
                <StyledTableCell align="center">Money </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice((page) * (rowsPerPage), (page) * (rowsPerPage) + (rowsPerPage))
                : rows
              ).map((row) => (
                <StyledTableRow key={row.no}>
                  <TableCell component="th" scope="row" align="center" >
                    {row.no}
                  </TableCell>
                  <TableCell align="center">
                    {row.user_id}
                  </TableCell>
                  <TableCell align="center">
                    {row.product_cnt}
                  </TableCell>
                  <TableCell align="center">
                    {row.all_img_cnt}
                  </TableCell>
                  <TableCell align="center">
                    {row.no_img_cnt}
                  </TableCell>
                  <TableCell align="center">
                    {row.ok_img_cnt}
                  </TableCell>
                  <TableCell align="center">
                    {row.img_price}
                  </TableCell>
                  <TableCell align="center">
                    {row.money}
                  </TableCell>
                </StyledTableRow>
              ))}

              {emptyRows > 0 && (
                <StyledTableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </StyledTableRow>
              )}
            </TableBody>
            <StyledTableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
                  colSpan={8}
                  count={rows.length + 1}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                /></TableRow>
            </StyledTableFooter>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
