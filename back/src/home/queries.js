const getMembers = "SELECT * FROM member";
const getMemberById = "SELECT * FROM member WHERE id = $1";
const getAdmins = "SELECT * FROM member WHERE user_id = $admin"; 
const checkIdExists = "SELECT m FROM member m WHERE m.user_id = $1";
const addMember = " INSERT INTO member (user_id,password) VALUES ($1,$2)";
const removeMember = "DELETE FROM member where id = $1 ";
const updateMember = "UPDATE member SET user_id = $1 WHERE user_id = $2";
const checkUser 
=  "SELECT CASE (SELECT COUNT(*) FROM member WHERE user_id = $1 AND password = $2) WHEN '0' THEN NULL ELSE (SELECT user_id FROM member WHERE user_id = $1 AND password = $2) END AS user_id, CASE (SELECT COUNT(*) FROM member WHERE user_id = $1 AND password = $2) WHEN '0' THEN NULL ELSE (SELECT password FROM memberWHERE user_id = $1 AND password = $2) END AS password";
const onLogin = "SELECT * FROM member m WHERE (m.user_id = $1 and m.password = $2)";
module.exports = {
    getMembers,
    getMemberById,
    checkIdExists,
    addMember,
    removeMember,
    updateMember,
    checkUser,
    onLogin,
};