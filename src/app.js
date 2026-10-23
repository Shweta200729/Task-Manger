const express=require("express")
const taskModel=require("./model/task.model")
const cors=require("cors");

const app=express();
app.use(cors());
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

app.get("/tasks",async(req,res)=>{
    try{
        const tasks=await taskModel.find({});
          res.status(200).json({message:"succesfull",tasks})

    }
    catch(err){
        console.error(err);
        res.status(404).json({message:err.message})
    }
})
app.delete('/tasks/:id', async (req, res) => {
  try {
    const para = req.params.id; 
    const tasks = await taskModel.findByIdAndDelete(para);

    if (!tasks) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Successfully deleted", tasks });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});


app.delete('/tasks', async (req, res) => {
  try {
    await taskModel.deleteMany({}); // ✅ sab tasks delete
    res.status(200).json({ message: "All tasks permanently deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports=app;