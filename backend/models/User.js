import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    phone: {
      type: Number,
      required: true
    },
    address: {
        type: String,
        required: true
    },
    role :{
        type: Number,
        default: 0,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;