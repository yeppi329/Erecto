const cors = require('cors');
const express = require('express');
const memberRoutes = require('./src/member/routes');
const homeRoutes = require('./src/home/routes');

const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hellooo");
});

// app.use('/api/v1/members',memberRoutes);
app.use('/api/member',memberRoutes);
//app.use('/api/member/login/home',homeRoutes)
app.use(express.urlencoded({ extended: false }));
app.listen(port,()=> console.log(`app listening on port ${port}`));

