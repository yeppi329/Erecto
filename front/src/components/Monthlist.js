import * as React from 'react';
import PropTypes from 'prop-types';
import { styled,useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
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

function createData(no, product, count) {
  return { no, product, count };
}
//DB 구성 전 임시 데이터 삽입
const rows = [
  createData(1,'코치스몰리스틀릿시그니처 자카드_아이보리_스몰_코치',358),
  createData(2,'샤넬클래식미니캐비어은장_레드_미니_샤넬',355),
  createData(3,'샤넬클래식미니베이지램금장_베이지_미니_샤넬',372),
  createData(4,'미알파이톤프레스드레더원석토트백_옐로우_미니_미알',361),
  createData(5,'일리캡슐네스프레소호환커피_디카페인_10개입_일리',324),
  createData(6,'달마이어캡사캡슐커피네스프레소호환_그란베르데룽고클래식_10개입_달마이어',337),
  createData(7,'프랑스카페로르네스프레소호환캡슐커피_인디아_10개입_로르',368),
  createData(8,'프랑스카페로르네스프레소호환캡슐커피_과테말라_10개입_로르',375),
  createData(9,'프랑스카페로르네스프레소호환캡슐커피_콜롬비아_10개입_로르',331),
  createData(10,'켈로그프링글스오리지날110g_오리지날_110g_프링글스',388),
  createData(11,'어뮤즈듀틴트11복숭아A1박스_화이트_4g_어뮤즈',334),
  createData(12,'스타벅스테이크아웃일회용종이컵_화이트_12oz_스타벅스',369),
  createData(13,'비너스130D타이즈VST9130F_블랙_2개입_신영스타킹',336),
  createData(14,'옹브르꿀뢰르까드리_16_3g_끌레드뽀보떼',361),
  createData(15,'매일유업아몬드브리즈두유오리지날_오리지날_190ml_매일유업',329),
  createData(16,'아비노데일리모이스춰라이징바디로션대용량자몽_자몽_1L_아비노',341),
  createData(17,'노브랜드엑스트라버진올리브유1L_none_1L_노브랜드',333),
  createData(18,'원플러퍼스널핸드워시투데이1_none_30ml_원플러',335),
  createData(19,'버나드메이플시럽250g_none_250g_버나드',327),
  createData(20,'코카콜라오리지날_레드_250ml_코카콜라',401),
  createData(21,'프레쉬블랙티콤부차페이셜트리트먼트에센스250ml_none_250ml_프레쉬',421),
  createData(22,'듀라렉스베르사이유엠버머그_엠버_260ml_듀라렉스',361),
  createData(23,'듀라렉스베르사이유크레올머그_크레올_260ml_듀라렉스',326),
  createData(24,'메디필아하바하28데이즈히알크림_30ml_씨엘피코스메틱',335),
  createData(25,'마블크리머머그_300ml_히츠키코보',316),
  createData(26,'타블도트슬로우카페머그_네온_300ml_히츠키코보',372),
  createData(27,'마블잉크점박이크리머머그컵_그레이_300ml_히츠키코보',370),
  createData(28,'록시땅시어버베나엑스트라젠틀핸드앤바디로션300ml_none_300ml',379),
  createData(29,'하이트진로토닉워터탄산수300ml_none_300ml_하이트진로',327),
  createData(30,'샬랑드파리끄렘드아쿠아고농축초보습크림_아쿠아_30ml_샬랑드파리',377),
  createData(31,'몬스터에너지오리지날_오리지날_355ml_코카콜라',358),
  createData(32,'샬랑드파리앰플드아쿠아어드밴스드슈퍼초고보습앰플_아쿠아_35ml_샬랑드파리',322),
  createData(33,'스타벅스브라운모던테이블클락알람시계_아이보리그린_40g_브라운',355),
  createData(34,'어뮤즈듀틴트고수분물빛비건틴트_라비앙코랄_4g_어뮤즈',334),
  createData(35,'구글크롬캐스트4세대리모컨_스노우_none_구글',346),
  createData(36,'엑티몬미니거치포켓5000mAH보조배터리8핀일체형_화이트_none_액티몬',356),
  createData(37,'내열글라스계량컵_투명_500ml_히츠키코보',305),
  createData(38,'오리온초코송이50g_none_50g_오리온',316),
  createData(39,'크리니크모이스춰써지인텐스핑크크림50ml_핑크_50ml_크리니크',354),
  createData(40,'로에퍼퓸드핸드크림50ml_하쉬그린_50ml_로에',348),
  createData(41,'로에퍼퓸드핸드크림50ml_신시어우드_50ml_로에',332),
  createData(42,'프레쉬블랙티퍼밍코르셋세럼50ml_none_50ml_프레쉬',334),
  createData(43,'러빙홈스트로우고급형50p_멀티_50개입_러빙홈',353),
  createData(44,'롯데빼빼로오리지날초코_오리지날_54g_롯데',375),
  createData(45,'크리넥스안심물티슈항균캡60매x1개99.9살균소독_none_60매_크리넥스',377),
  createData(46,'샤넬르베르니네일컬러_643_13ml_샤넬',348),
  createData(47,'루이비통모노그램6키홀더지갑6KEYHOLDERM62630_모노그램_none_루이비통',354),
  createData(48,'토리버치밀러미니백80532_레드_미니_토리버치',461),
  createData(49,'오리온꼬북칩초코츄러스맛80g_초코츄러스_80g_오리온',357),
  createData(50,'미쟝센퍼펙트세럼오리지널80ml_none_80ml_미쟝센',333),
  createData(51,'플레이도우플레이도칼라도우뉴8팩_E5044_448g_플레이도우',371),
  createData(52,'샤넬파리올뉴미니골드볼클래식미니백크로스백 AS1787_네이비_뉴미니_샤넬',380),
  createData(53,'BtvSK브로드밴드셋톱박스TV정품리모컨BMMBA03_블랙_none_모본',330),
  createData(54,'방탄소년단버터BUTTER노래앨범BTS_cream_none_bts',374),
  createData(55,'casetify휴대폰케이스_매트블랙_아이폰12pro_케이스티파이',381),
  createData(56,'CHANEL선글라스안경 케이스퀼팅블랙가죽대형하드_블랙_대형_샤넬',338),
  createData(57,'샤넬 CHANEL 샤넬골드볼금장WOCAP1450_옐로우_none_샤넬',358),
  createData(58,'프레쉬HesperidesGrapefruitBodyLotion300ml_none_300ml_프레쉬',333),
  createData(59,'homebrew고블랫잔a_lg',321),
  createData(60,'빈티지샤넬No5퍼퓸_none_7ml_샤넬',344),
  createData(61,'기어와인리푸어_아이보리_none_벤츠',321),
  createData(62,'하트핸드워머충전식손난로_핑크_none_코코론',365),
  createData(63,'샤넬클래식미니캐비어금장_그레이_none_샤넬',326),
  createData(64,'라미만년필사파리하드케이스_블랙_none_라미',322),
  createData(65,'벤도노파이톤레더여권케이스_핑크그레이_none_벤도노',338),
  createData(66,'페라가모간치니레더여성장지갑_메탈실버_none_살바토레페라가모',380),
  createData(67,'레이벤케이스안경선글라스케이스_브라운_none_레이벤',229),
  createData(68,'사브르비스트로커트러리디저트포크_그린펀_none_사브르',332),
  createData(69,'사브르비스트로커트러리디저트포크_네이비_none_사브르',335),
  createData(70,'사브르비스트로커트러리디저트포크_버건디_none_사브르',343),
  createData(71,'사브르비스트로커트러리디저트포크_오렌지_none_사브르',323),
  createData(72,'사브르비스트로커트러리디저트포크_다크그레이_none_사브르',326),
  createData(73,'사브르비스트로커트러리디저트포크_파스텔그린_none_사브르',323),
  createData(74,'베리에이션벨머그_none_0.28l_포트메리온',333),
  createData(75,'오리지날아기물티슈_none_100매_베베앙',324),
  createData(76,'하리보골드베렌젤리포켓사이즈_none_100g_하리보',336),
  createData(77,'티에스라퍼퓸샴푸드라마틱우디_none_100ml_티에스트릴리온',347),
  createData(78,'카밀핸드앤네일크림클래식인텐시브_none_133ml_카밀',340),
  createData(79,'커클랜드시그니처블랙페퍼그라인더_none_178g_커클랜드',338),
  createData(80,'무화당저당나한과식혜_none_1800ml_무화당',322),
  createData(81,'브레드가든크러쉬드레드페퍼_none_200g_브레드가든',351),
  createData(82,'에스티로더어드밴스드나이트리페어싱크로나이즈드멀티리커버리콤플렉스_none_30ml에스티더',353),
  createData(83,'셀렌디르세보라이저두피샴푸_none_400ml_셀렌디르',313),
  createData(84,'피어나셀카밍슈터셀렌디르탈모샴푸_none_400ml_피어나셀',320),
  createData(85,'제주오티아귤피차_none_42g_탐진유통',348),
  createData(86,'한살림유기쌀올리고당_none_440g_한살림',337),
  createData(87,'크리넥스안심플러스손소독제프레쉬알로에겔_none_480ml_그린코스',333),
  createData(88,'필그너우르켈캔맥주_none_500ml_팔젠스키프레즈드로이',322),
  createData(89,'스텔라아르투아캔맥주_none_500ml_오비맥주',338),
  createData(90,'바삭바삭콘칩_none_55g_한살림',361),
  createData(91,'크리넥스수앤수코튼클린플러스_none_72매_유한킴벌리',318),
  createData(92,'히트쉴드써멀프로텍티브헤어로션_none_80ml_jmw',357),
  createData(93,'대상청정원햇살담은염도낮춘발효다시마간장_none_840ml_대상',341),
  createData(94,'농심육개장사발면_none_86g_농심',360),
  createData(95,'빈추리에센셜와인에어레이터_none_none_빈추리',367),
  createData(96,'paris휴대폰케이스_클리어핑크_아이폰12pro_케이스티파이',342),
  createData(97,'Passport Check Stickers휴대폰케이스_클리어네온핑크_아이폰12pro_케이스티파이',375),
  createData(98,'로트링rapidograph라피도그래프IPL0.3mm1903236_블랙_0.3mm_로트링',363),
  createData(99,'샤넬레베쥬뚜쉬드땅벨민파운데이션쿠션SPF25_로제_11g_샤넬',346),
  createData(100,'닥터올가프리미엄썬프로텍션크림SPF50_none_60ml_닥터올가',350),
  createData(101,'달바워터풀톤업선크림SPF 50+PA++++50ml_none_50ml_달바',354),
  createData(102,'Suja에너자이즈포커스라즈베리레몬354ml_라즈베리레몬_354ml_suja',369),
  createData(103,'testcut',1),
  createData(104,'오호라UVLED젤램프_화이트_none_오호라',457),
  createData(105,'시세이도클리어스틱UV프로텍터썬스틱_none_15g_시세이도',357),
  createData(106,'보테가베네타남성인트레치아토반지갑V0P712844_카키_none_보테가베네타',327),
  createData(107,'골드볼woc_핑크램_샤넬',33),
];

export default function MonthlistTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);//기본10줄씩 표시 

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));//기본10줄씩 표시 
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500}} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <StyledTableCell align="center">NO.</StyledTableCell>
            <StyledTableCell align="center">Product</StyledTableCell>
            <StyledTableCell align="center">Count</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice((page) * (rowsPerPage), (page) * (rowsPerPage) + (rowsPerPage))
            : rows
          ).map((row) => (
            <StyledTableRow key={row.no}>
              <TableCell component="th" scope="row" align="center" style={{ width: 160}}>
                {row.no}
              </TableCell>
              <TableCell align="center">
                {row.product}
              </TableCell>
              <TableCell style={{ width: 160 }}  align="center">
                {row.count}
              </TableCell>
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          <StyledTableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length+1}
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
            />
          </StyledTableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
