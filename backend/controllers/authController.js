import User from '../models/User.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()
export const authRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, address, password, phone } = req.body;
        if(!firstName || !lastName || !email || !password || !phone || !address) {
            return res.send({ message: 'Please enter all required fields'})
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            phone,
            address,
          });
          const savedUser = await newUser.save();
          res.status(201).json({ success: true, message: "User has successfully been created", data: savedUser});
    } catch (error) {
        res.status(500).json({ success: false, error: "Could not register user" }); 
    }
}

export const authLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });
      delete user.password;
      res.status(200).json({ success: true, message: "Login was successful", token, data: user });
    } catch (err) {
      res.status(500).json({ success: false,  error: "Could not log into account" });
    }
  };