import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema ({
  email:{type:String, unique:true},
  password:String,
  firstName:String,
  lastName:String
})
const adminSchema = new Schema ({
  email:{type:String, unique:true},
  password:String,
  firstName:String,
  lastName:String
})
const courseSchema = new Schema ({
  title:String,
  discription:String,
  price:Number,
  imageUrl:String,
  creatorId:{
    type:ObjectId,
    ref:'admindata'
  }
})
const purchaseSchema = new Schema ({
  userId:{
    type:ObjectId,
    ref:'userdata'
  },
  courseId:{
    type:ObjectId,
    ref:'coursedata'
  }
})

const userModel = mongoose.model('userdata',userSchema)
const adminModel = mongoose.model('admindata',adminSchema)
const courseModel = mongoose.model('coursedata',courseSchema)
const purchaseModel = mongoose.model('purchasedata',purchaseSchema)

module.exports({
  userModel,
  adminModel,
  courseModel,
  purchaseModel
})

