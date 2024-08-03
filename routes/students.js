import express from "express";

const students=[];

const studentsRouter=express.Router();
//find all students
studentsRouter.get("/",(req,res ) =>{

    try{
res.send({msg:"info about all students",students});
    }
    catch(err)
    {
res.status(500).send({msg:"internal server error"});
    }
});
//find singls students

studentsRouter.get("/:studentId",(req,res)=>{
    const studentId=req.params.studentId;
    try{
        const stuData=students.find((stu)=>
            stu.id===studentId);
        if(stuData){
        res.send({...stuData});}
        else{
            res.status(404).send({msg:"no students found"});
        }
    }
    catch(err)
    {
res.status(500).send({msg:"internal server error"});
    }
})

//create
studentsRouter.post("/",(req,res) =>{
const studentInfo={...req.body,id:Date.now().toString(),studentId:"null"};
try{
students.push(studentInfo)
res.send({msg:"students created successfully"});

}
catch(err){
    res.status(500).send({msg:"internal server error"}); 
}

})

//update a single students

studentsRouter.put("/:studentId",(req,res)=>{
    const updateInfo=req.body;
    const studentId=req.params.studentId;
    try{
        const Index=students.findIndex((stu)=>stu.id===studentId);
        const stuObj=students.find((stu)=>stu.id===studentId);
        if(stuObj){
    students[Index]={
        ...stuObj,...updateInfo};
        res.send({msg:"update success"});
    }else{
        res.status(404).send({msg:"no students found"});
    }}
    catch(err)
    {
        res.status(500).send({msg:"internal server error"}); 
    }
  }
);
//delete a single students

studentsRouter.delete("/:studentId",(req,res)=>{
    const studentId=req.params.studentId;
    try{
        const Index=students.findIndex((stu)=>stu.id===studentId);
        const stuObj=students.find((stu)=>stu.id===studentId);
        if(stuObj){
    students.splice(Index,1);
    res.send({msg:"delete success"});
        
    }else{
        res.status(404).send({msg:"no students found"});
    }}
    catch(err)
    {
        res.status(500).send({msg:"internal server error"}); 
    }
  }
);


export default studentsRouter;