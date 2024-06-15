const Student = require('./schema.js')

function getAllCGPA(){
    return Student.find({},'name rollNumber cgpa').then(res=>res)
}

function getStudentDetails(num){
    return Student.findOne({rollNumber:num})
}

function isExist(num){
    return Student.findOne({rollNumber:num})
}


module.exports={isExist,getAllCGPA,getStudentDetails}