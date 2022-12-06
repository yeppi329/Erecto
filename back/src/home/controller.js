const pool = require('../../db');
const queries = require('./queries');

const getHome = (req,res) =>{
    pool.query(queries.getHome,(error,results)=>{
        if(error) throw error;
        console.log('req.body:',req.body);
        
    });
};

module.exports = {
    getHome,
};