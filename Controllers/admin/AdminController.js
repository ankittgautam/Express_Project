const CourseModel = require('../../Models/course')

class AdminController{
    static dashboard= async(req,res)=>{
         try {
            const{name,image,_id}= req.data1
            const data = await CourseModel.find()
            res.render('admin/dashboard',{n:name, img:image,p:data})
         } catch (error) {
            console.log(error)
         }
    }

    static updatestatus = async(req,res) =>{
      try {
         const update = await CourseModel.findByIdAndUpdate(req.params.id,{
            commit:req.body.commit,
            status:req.body.status
         })
         res.redirect('/admin/dashboard')
      } catch (error) {
         console.log(error)
      }
    }
}
module.exports = AdminController