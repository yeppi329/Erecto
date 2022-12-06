const { Router } = require('express');
const controller = require('./controller');

const router = Router();


// router.get('/',(req,res)=>{
//     res.send("using api route");
// });

router.get('/',controller.getHome);
//router.post('/',controller.addMember);


// router.get('/login', (req, res) => {
// 	// 임시로 값을 넣어 주었다.
//     res.send({data: 'data'})
// });
//router.post('/login',controller.onLogin);

module.exports = router;