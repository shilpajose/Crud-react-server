const express= require('express')
const userController = require('../Controllers/userController')
const placementController = require('../Controllers/placementController')
const jobApplicationController = require('../Controllers/jobAppliationsController')
const multerConfig = require('../MiddleWares/multerMiddleware')

const router = new express.Router()

// admin login 
router.post('/admin-login',userController.adminLogin)

// admin add-placements
router.post('/admin/add-placements',placementController.addPlacements)

// get all placements
router.get('/admin/all-placements',placementController.getAllPlacements)


// get all placements
router.get('/admin/allplacements',placementController.allPlacements)

// get single job detail
router.get('/single-job/:_id',placementController.singleJobDetails)

// user register
router.post('/user-register',userController.userRegister)

// user Login
router.post('/user-login',userController.userLogin)

// get all users
router.get('/admin/allusers',userController.allUsers)

// job apply
router.post('/job-apply',multerConfig.single('resume'),jobApplicationController.jobApply)

// get my interviews
router.get('/user-interviews',jobApplicationController.userInterviews)

// get all job applications
router.get('/admin/all-job-applications',jobApplicationController.allJobApplications)

// delete job applications
router.delete('/admin/delete-jobapplications/:_id',jobApplicationController.removeJobApplications)

// delete user
router.delete('/admin/delete-user/:_id',userController.deleteUser)

// delete placements
router.delete('/admin/delete-placement/:_id',placementController.deletePlacement)


// edit placement 
router.put('/admin/edit-placement/:pid',placementController.editPlacements)






module.exports= router