const getMembers = "SELECT * FROM member";
const getMemberById = "SELECT * FROM member WHERE id = $1";
const getAdmins = "SELECT * FROM member WHERE user_id = $admin"; 
const checkIdExists = "SELECT m FROM member m WHERE m.user_id = $1";
const addMember = " INSERT INTO member (user_id,password) VALUES ($1,$2)";
const removeMember = "DELETE FROM member where id = $1 ";
const updateMember = "UPDATE member SET user_id = $1 WHERE user_id = $2";
const sql1 = "SELECT m FROM member m WHERE m.user_id = $1";
const sql2 = "SELECT COUNT(*) FROM member WHERE user_id = $1 and password = $2";
//const onLogin = "SELECT * FROM member m WHERE (m.user_id = $1 and m.password = $2)";
const chkRole = "select user_role from member where user_id = $1";
module.exports = {
    getMembers,
    getMemberById,
    checkIdExists,
    addMember,
    removeMember,
    updateMember,
    sql1,
    sql2,
    chkRole,
    //onLogin,
};