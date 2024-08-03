import express from "express";
import studentsRouter from "./routes/students.js";
import teachersRouter from "./routes/teachers.js";

const server= express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send({message:"hello ruthrapathi"});
});
server.get("/users",(req,res)=>{
    res.send({message:"USER DATA", users:[{name:"ruthra"},{name:"pathi"}],});
});

server.post('/',(req,res)=>{
    const body=req.body;
    console.log("body parsing", body);
    res.send({message:"successfully created postman for express"});
});

server.use("/students",studentsRouter)
server.use("/teachers",teachersRouter)
const port=5000;
server.listen(port,()=>{
  
    console.log(Date().toString(),"listen on porting", port)
} );