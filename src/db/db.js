const mongoose=require("mongoose")

async function connectDB(){
  await mongoose.connect(process.env.MONGO_URL)
  console.log("mongoDB connected")
}

module.exports=connectDB;