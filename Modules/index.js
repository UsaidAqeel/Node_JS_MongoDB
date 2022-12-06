import mongoose from "mongoose";

const { Schema } = mongoose;

// User Schema
const Users = new Schema(
    {
        User_Name: String,
        User_Comment: Array,
        User_Todo: Array,
        // User_Gender: String
    }
)

const User_Model = mongoose.model("AllUser", Users);
export { User_Model }