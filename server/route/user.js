import { Router } from "express";

const userRouter = Router()

userRouter.post("/signup", async (req,res)=>{
  res.json({msg:"Signup successful"})
})

userRouter.post("/signin", async (req,res)=>{
  res.json({msg:"Signin successful"})
})
userRouter.get("/purchases", async (req,res)=>{
  res.json({msg:"Purchased courses"})
})

module.exports({
  userRouter:userRouter
})