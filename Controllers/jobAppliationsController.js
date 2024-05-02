const jobapplications = require('../Models/jobApplicationModel')

// job apply
exports.jobApply = async (req, res) => {
    console.log(req.file);
    const { fullname, jobId, phone, department,company,date ,userEmail,userId} = req.body
    const resume = req.file.filename
    console.log(fullname, jobId, phone, department,company,date ,userEmail,userId,resume);
    try {
        const existingJob = await jobapplications.findOne({ userEmail,jobId })
        if (existingJob) {
            res.status(406).json('Already applied for this job')
        } else {
            const newJob = new jobapplications({
                fullname, jobId, phone, department, resume,company,date,userEmail,userId
            })
            await newJob.save()
            res.status(200).json(newJob)
        }

    } catch (err) {
        res.status(401).json(err)
    }
}

// // get user interviews
// exports.userInterviews = async (req, res) => {
//     const {userEmail} = req.body
//     try {
//         const userinterviews = await jobapplications.find({userEmail})
//         res.status(200).json(userinterviews)
//     }
//     catch (err) {
//         res.status(401).json(err)
//     }
// }

exports.userInterviews = async (req, res) => {
    const { userEmail } = req.body; // Assuming userEmail is sent as a query parameter
    try {
        const userinterviews = await jobapplications.find({ userEmail });
        res.status(200).json(userinterviews);
    } catch (err) {
        res.status(401).json(err);
    }
};

exports.allJobApplications = async (req, res) => {
    try {
        const alljobapplications = await jobapplications.find()
        res.status(200).json(alljobapplications)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// delete
exports.removeJobApplications = async (req, res) => {
    const { _id: _id } = req.params
    try {
        const Jobdelete = await jobapplications.findByIdAndDelete({ _id: _id })
        res.status(200).json(Jobdelete)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

