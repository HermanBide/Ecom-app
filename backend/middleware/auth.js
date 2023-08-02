import jwt from 'jsonwebtoken';
import User from '../models/User'

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken
    if(!token) {
        return res.status(401).json({success: false, message: "You're not authorized"})
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
        if(error) {
            return res.status(401).json({success: false, message: "Token is invalid"})
        }
        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.role === 'admin') {
            next()
        } else {
            return res.status(401).json({success: false, message: "You are not authenticated"})
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.role === 'admin') {
            next()
        } else {
          return res.status(401).json({success: false, message: "You are not authorized"})
        }
    })
}

export const isAdmin =  async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if(user.role === 1) {
      next()
    } else {
      return res.status(403).json({success: false, message: "UnAuthorized Access"})
    }
  } catch (error) {
    console.log(error)
    return res.status(401).json({ success: false, message: "Error in admin middleware", error})
  }
}