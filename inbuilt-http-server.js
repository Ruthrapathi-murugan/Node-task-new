import { json } from 'express';
import {createServer} from 'http';

const server=createServer ((req,res)=>{
    if(req.method==="GET"){
    res.end("<h1>hello ruthrapathi welcome</h1>");}
    else if(req.method==="POST")
res.end("<h1>successfully create</h1>");
});

const port=5000;
server.listen(port,()=>{
    console.log("server listen on port" + port);
});