const { Router } = require('express');
const controller = require('./controller');

const router = Router();


// router.get('/',(req,res)=>{
//     res.send("using api route");
// });

router.get('/',controller.getMembers);

router.get('/login',controller.getMembers);

router.post('/onLogin',controller.onLogin);
module.exports = router;