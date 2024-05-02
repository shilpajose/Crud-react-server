const placements = require('../Models/placementModel')

// add placements
exports.addPlacements = async (req, res) => {
    const { company_name, description, job_position, date, venue } = req.body

    try {
        const existingPlacement = await placements.findOne({ company_name,job_position })
        if (existingPlacement) {
            res.status(406).json('This job already posted by this company!')
        } else {
            const newPlacement = new placements({
                company_name, description, job_position, date, venue
            })
            await newPlacement.save()
            res.status(200).json(newPlacement)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}
// get all placements front end search key
exports.getAllPlacements = async (req, res) => {
    const searchKey = req.query.search
    const query = {
        job_position: {
            $regex: searchKey, $options: 'i'
        }
    }
    try {
        const allPlacements = await placements.find(query)
        res.status(200).json(allPlacements)
    }
    catch (err) {
        res.status(401).json(err)
    }
}
// get all placements
exports.allPlacements = async (req, res) => {
    try {
        const allPlacements = await placements.find()
        res.status(200).json(allPlacements)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// get single job detail
exports.singleJobDetails = async (req, res) => {
    const { _id: _id } = req.params
    try {
        const singleJob = await placements.findOne({ _id })
        res.status(200).json(singleJob)
    }
    catch (err) {
        res.status(401).json(err)
    }
}


// delete Placement
exports.deletePlacement = async (req,res)=>{
    const {_id:_id} = req.params
    try{
        const placementDelete = await placements.findByIdAndDelete({_id:_id})
        res.status(200).json(placementDelete)
    }
    catch(err){
      res.status(401).json(err)
    }
}

// edit project
exports.editPlacements = async(req,res) =>{
    const {pid} = req.params
    const {company_name, description, job_position, date, venue} = req.body
    try{
        //updation in mongoose
        const updatedPlacement = await placements.findByIdAndUpdate({_id:pid},{
            //always give in order of schema
            company_name, description, job_position, date, venue
        },{new:true})
        //to save in mongoDb
        await updatedPlacement.save()
        res.status(200).json(updatedPlacement)
        // console.log('hii');
    }catch(err){
        res.status(401).json(err)
    }

}