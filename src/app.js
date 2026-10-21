const express=require("express")
const taskModel=require("./model/task.model")


const app=express();

app.use(express.json());

app.post("/task",async(req,res)=>{
    try{
   console.log(req.body);
   const task= await taskModel.create({
    task: req.body.task

   })
   res.status(201).json({message:"succesfully created",task})
}
catch(err){
    console.error(err)
     res.status(404).json({message:err.message})

}

})

app.get("/task-Magager",async(req,res)=>{
    try{
        const tasks=await taskModel.find({});
          res.status(200).json({message:"succesfull",tasks})

    }
    catch(err){
        console.error(err);
        res.status(404).json({message:err.message})
    }
})

module.exports=app;