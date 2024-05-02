
const multer = require('multer')

// define storage and filename , physically upload cheyyunna files eee folder il save aakan paranju kodukkunnu,,, 
// filename save aavumvo nanuk enth peru aano vendath .
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'./uploads')
    },
    filename :(req,file,callback)=>{
        const filename = `${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

//middleware = multer
// multer nu paranj kodukkanam storage name
const multerConfig = multer({
    storage 
})

module.exports = multerConfig