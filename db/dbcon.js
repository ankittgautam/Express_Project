const mongoose = require('mongoose')
const live_url = 'mongodb+srv://gautamankit1412:ankit1412@cluster0.dvwbjgd.mongodb.net/admissionportal?retryWrites=true&w=majority'
const local_url = 'mongodb://127.0.0.1:27017/admissionportal'

const connectdb = ()=> {
    return mongoose.connect(live_url)
    .then(()=>{
        console.log('connection successfully')
    }).catch((error)=>{
         console.log(error)
    })
}
module.exports=connectdb