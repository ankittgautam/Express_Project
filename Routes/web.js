const express = require('express')
const UserController = require('../Controllers/UserController')
const FrontendController = require('../Controllers/FrontendController')
const CourseController = require('../Controllers/CourseController')
const router = express.Router()
const checkuserauth = require('../middleware/auth')
const AdminController = require('../Controllers/admin/AdminController')

// router.get('/',UserController.home) //req
// router.get('/about',UserController.about)

//FrontendController
router.get('/',FrontendController.login)
router.get('/register',FrontendController.register)
router.get('/dashboard',checkuserauth, FrontendController.dashboard)
router.get('/about',checkuserauth,FrontendController.about)
router.get('/contact',checkuserauth,FrontendController.contact)
router.post('/userinsert',FrontendController.userinsert)
router.post('/verifylogin',FrontendController.verifylogin)
router.get('/logout',FrontendController.logout)
router.get('/profile',checkuserauth,FrontendController.profile)
router.post('/updatepassword',checkuserauth,FrontendController.updatepassword)
router.post('/updateprofile',checkuserauth,FrontendController.updateprofile)
//coursecontroller
router.post('/courseinsert',checkuserauth,CourseController.CourseInsert)
router.get('/course/display',checkuserauth,CourseController.coursedisplay)
router.get('/courseview/:id',checkuserauth,CourseController.courseview)
router.get('/courseedit/:id',checkuserauth,CourseController.courseedit)
router.post('/courseupdate/:id',checkuserauth,CourseController.courseupdate)
router.get('/coursedelete/:id',checkuserauth,CourseController.coursedelete)
//admincontroller
router.get('/admin/dashboard',checkuserauth,AdminController.dashboard)
router.post('/updatestatus/:id',checkuserauth,AdminController.updatestatus)


module.exports = router