const pool = require('../../db');
const queries = require('./queries');
const util = require('util');
const getConnect = (req,res) =>{  
    console.log('getting members')
};

const getMembers = (req,res) =>{ 
    const{user_id,password} = req.body;
    //check user_id
    pool.query(queries.sql1,[user_id],(error,results)=>{
        if(results.rows.length){
            pool.query(queries.sql2,[user_id,password],(error,results)=>{
                if(results.rows.length === 1) {
                    res.status(200).json(results.rows);
                }else{
                    res.status(402).send("code : 402");
                }
                   
            })
        }else{
            res.status(401).send("code : 401");
        }
        //add user
        
    });
};

// const getMembers = (req,res) =>{
//     pool.query(queries.getMembers,(error,results)=>{
//         if(error) throw error;
//         res.status(200).json(results.rows);
//     });
// };
const getMemberById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getMemberById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};
const addMember = (req,res) =>{
    const{user_id,password} = req.body;
    //check user_id
    pool.query(queries.checkIdExists,[user_id],(error,results)=>{
        if(results.rows.length){
            res.send("User_id already exists.");
        }
        //add user
        pool.query(queries.addMember,[user_id,password],(error,results)=>{
            if(error) throw error;
            res.status(201).send("Member Created Successfully");
        })
    });
};
const removeMember = (req,res) =>{
    const id = parseInt(req.params.id);

    pool.query(queries.getMemberById,[id],(error,results)=>{
        const noMemberFound = !results.rows.length;
        if(noMemberFound){  
            res.send("Member does not exist");
        }
        pool.query(queries.removeMember,[id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("member removed success")
        });
        
    }); 
};

const updateMember = (req,res)=>{
    const id = parseInt(req.params.id);
    const { user_id } = req.body;

    pool.query(queries.getMemberById,[id],(error,results)=>{
        const noMemberFound = !results.rows.length;
        if(noMemberFound){  
            res.send("Member does not exist");
        } 
        pool.query(queries.updateMember,[user_id,id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("member removed success")
        });
    })
};

const onLogin = (req, res) => {
    // user_id, user_pw 변수로 선언
    const { user_id,password } = req.body;
 // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
 
 pool.query(queries.sql1,[user_id], (error, results) => {
     if(error) throw error;
     res.status(201).send("success")
 })
};


const gethome = (req,res) =>{  
 res.open( __dirname + "/" + "index.html" );
};


module.exports = {
    getMembers,
    getMemberById,
    addMember,
    removeMember,
    updateMember,
    onLogin,
    getConnect,
    gethome,
};