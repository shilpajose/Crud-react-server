const mongoose = require('mongoose')

const placementSchema = new mongoose.Schema({
    company_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    job_position:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    }
})

const placements = mongoose.model('placements',placementSchema);

module.exports = placements