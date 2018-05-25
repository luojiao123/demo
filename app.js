const express = require('express');
const server = express();

server.listen(2839);

server.use('/get',(req,res)=>{
	res.send(['俄罗斯','意大利','新西兰'])
})

server.use(express.static('./'))