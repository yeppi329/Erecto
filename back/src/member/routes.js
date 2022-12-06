const { Router } = require('express');
const controller = require('./controller');

const router = Router();


// router.get('/',(req,res)=>{
//     res.send("using api route");
// });

router.get('/',controller.getMembers);
router.post('/',controller.addMember);
router.get('/:id',controller.getMemberById);
router.put('/:id',controller.updateMember);
router.delete('/:id',controller.removeMember);
router.get('/:user_id',controller.gethome);

//router.get('/login',controller.gethome);


 router.post('/onLogin',controller.onLogin);
module.exports = router;