require('dotenv').config()

import express from 'express'
import mongoose from 'mongoose';

import {userRouter} from './route/user'
import {adminRouter} from './route/admin'
import {courseRouter} from './route/course'

const app = express();
app.use(express.json())

app.use("/api/v1/user",userRouter)
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/course",courseRouter)

async function main() {
  app.listen(process.env.PORT,()=>{
    console.log("Listning at port "+process.env.PORT)
  })
  await mongoose.connect(process.env.MONGODB_ID)
  console.log("Connected to "+ process.env.MONGODB_ID)
}
main();

