import express from "express";

const teachers=[];

const teachersRouter=express.Router();
//find all teachers
teachersRouter.get("/",(req,res ) =>{

    try{
res.send({msg:"info about all teachers",teachers});
    }
    catch(err)
    {
res.status(500).send({msg:"internal server error"});
    }
});
//find singls teachers

teachersRouter.get("/:teacherId",(req,res)=>{
    const teacherId=req.params.teacherId;
    try{
        const teaData=teachers.find((tea)=>
            tea.id===teacherId);
        if(teaData){
        res.send({...teaData});}
        else{
            res.status(404).send({msg:"no teachers found"});
        }
    }
    catch(err)
    {
res.status(500).send({msg:"internal server error"});
    }
})

//create
teachersRouter.post("/",(req,res) =>{
const teacherInfo={...req.body,id:Date.now().toString(),teacherId:"null"};
try{
teachers.push(teacherInfo)
res.send({msg:"teachers created successfully"});

}
catch(err){
    res.status(500).send({msg:"internal server error"}); 
}

})

//update a single teachers

teachersRouter.put("/:teacherId",(req,res)=>{
    const updateInfo=req.body;
    const teacherId=req.params.teacherId;
    try{
        const Index=teachers.findIndex((tea)=>tea.id===teacherId);
        const teaObj=teachers.find((tea)=>tea.id===teacherId);
        if(teaObj){
    teachers[Index]={
        ...teaObj,...updateInfo};
        res.send({msg:"update success"});
    }else{
        res.status(404).send({msg:"no teachers found"});
    }}
    catch(err)
    {
        res.status(500).send({msg:"internal server error"}); 
    }
  }
);
//delete a single teachers

teachersRouter.delete("/:teacherId",(req,res)=>{
    const teacherId=req.params.teacherId;
    try{
        const Index=teachers.findIndex((tea)=>tea.id===teacherId);
        const teaObj=teachers.find((tea)=>tea.id===teacherId);
        if(teaObj){
    teachers.splice(Index,1);
    res.send({msg:"delete success"});
        
    }else{
        res.status(404).send({msg:"no teachers found"});
    }}
    catch(err)
    {
        res.status(500).send({msg:"internal server error"}); 
    }
  }
);


export default teachersRouter;