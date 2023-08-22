const jwt = require('jsonwebtoken')
const UserModel= require('../Models/user')

const checkuserauth = async(req,res,next)=>{
    // console.log('hello auth')
    const {token}= req.cookies
    if (!token) {
       req.flash('error','unauthorized user,please login') 
       res.redirect('/')
    }else{
        const verifytoken = jwt.verify(token,'ankitgautam@mca1234567890')
        //console.log(verifytoken)
        const data = await UserModel.findOne({_id:verifytoken.ID})
        // console.log(data)
        req.data1 = data
        next()
    }
}
module.exports = checkuserauth