const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true
    },
    semResults:{
        type:[String],
        required:true
    },
    cgpa:{
        type:String,
        required:true
    },
})
const Student = mongoose.model('studentResults',studentSchema)


module.exports=Student