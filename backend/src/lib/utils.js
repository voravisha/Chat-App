import jwt from "jsonwebtoken"

export const generateToken = (res, userId) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("jwt",token,{
        maxAge:7 * 24 * 60 * 60 * 1000, //MS
        httpOnly:true, //prevents XSS attacks cross-site scripting attacks
        sameSite:"strict", // CSRF attacks cross-site request forgery
        secure:process.env.NODE_ENV !== "development", // secure cookies in production
    })

    return token
}   