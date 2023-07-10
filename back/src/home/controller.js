const pool = require('../../db');
const queries = require('./queries');

const getMonthRage = (year, month)=>{
    
    const date = new Date();
    const first_day = new Date(date.getFullYear(), date.getMonth(), 1);
    const last_day = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return (first_day, last_day);
}

const convert_utc = (date_string)=>{
    
    const dt_strptime = datetime.datetime.strptime(date_string, '%Y-%m-%d %H:%M:%S.%f');
    
    //시간대 설정
    const tz_kst = pytz.timezone('Asia/Seoul');
    const  dt_kst = tz_kst.localize(dt_strptime);
    
    //시간, 날짜 값 변경하기
    const dt_utc_from_kst = dt_kst.astimezone(pytz.utc);



    const curr = new Date();
document.writeln("현재시간(Locale) : " + curr + '<br>');

// 2. UTC 시간 계산
const utc = 
      curr.getTime() + 
      (curr.getTimezoneOffset() * 60 * 1000);

// 3. UTC to KST (UTC + 9시간)
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const kr_curr = 
      new Date(utc + (KR_TIME_DIFF));

    return dt_utc_from_kst.strftime('%Y-%m-%d %H:%M:%S.%f');
}




const get_user_monthtotal = (req,res) =>{
    
    //이거 근데 지금 이번달꺼 받아오는 구조인데 이거 바꿔야해...
    const{user_id} = req.body;
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year + '-' + month  + '-' + day;
    pool.query(queries.get_user_monthtotal,[user_id,dateString],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });  


};
const get_month_list= (req,res) =>{
    
    const first_day = getMonthRage(parseInt(req.params.year));
    const last_day = getMonthRage(parseInt(req.params.month));

    pool.query(queries.get_month_list,[],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });  


};

module.exports = {
    get_user_monthtotal,
    get_month_list
};