const mongoose = require('mongoose')

const jobApplicationSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
   
    jobId: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    company:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    
    userId:{
        type:String,
        required:true
    }
})

const jobapplications = mongoose.model("jobapplications", jobApplicationSchema)
module.exports = jobapplications

