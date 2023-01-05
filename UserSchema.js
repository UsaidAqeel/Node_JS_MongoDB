import mongoose from "mongoose";
const { Schema } = mongoose;

// User Schema
const Users = new Schema({
  User_Name: { type: String },
  User_Todo : [],
});

const User_Model = mongoose.model("AllUser", Users);
export { User_Model };
