export default(req,res)=>{
	res.statusCode = 200;
	res.json({user_id : "user1", role:"user"});
}