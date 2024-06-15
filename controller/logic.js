const  {isExist,getAllCGPA,getStudentDetails} = require('../modal/fetchResults.js')

function leaderboardRes(req,res,next){

    getAllCGPA().then(i=>{
        i.sort((a,b)=>(+b.cgpa)-(+a.cgpa))
        res.render('leaderboard.ejs',{student:i,removePath:true})

    })    
}

function studentRes(req,res,next){
    
    getStudentDetails(req.params.rollnum).then(details=>{
        if(details===null){
            return res.render('error.ejs',{removePath:false,message:"Student not found"})
         }

        res.render('student.ejs',{student:details,removePath:false})
    })

}

function logIn(req,res,next){
    if(req.body.rollnum!==req.body.password){
        return res.redirect('/')
    }
    isExist(req.body.rollnum).then(result=>{
        if(result===null){
           return res.render('error.ejs',{removePath:false,message:"Available only for CSE-A 2020-2024 batch"})
        }
        res.redirect('/student/'+req.body.rollnum)
    })

}


module.exports={logIn,leaderboardRes,studentRes}


