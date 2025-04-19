import { Router } from "express";

const courseRouter = Router()

courseRouter.post("/purchase", async (req,res)=>{
  res.json({msg:"Purchase successful"})
})

courseRouter.get("/preview", async (req,res)=>{
  res.json({msg:"Preview"})
})

module.exports({
  courseRouter:courseRouter
})