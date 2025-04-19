import { Router } from "express";

const adminRouter = Router()

adminRouter.post("/signup", async (req,res)=>{
  res.json({msg:"Signup successful"})
})

adminRouter.post("/signin", async (req,res)=>{
  res.json({msg:"Signin successful"})
})
adminRouter.post("/course", async (req,res)=>{
  res.json({msg:"Purchased courses"})
})
adminRouter.put("/course", async (req,res)=>{
  res.json({msg:"Purchased courses updated"})
})
adminRouter.get("/course/bulk", async (req,res)=>{
  res.json({msg:"Purchased courses bulk"})
})

module.exports({
  adminRouter:adminRouter
})