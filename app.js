const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 4000

const main = require('./utils/dbConnect.js')
const {logIn,leaderboardRes,studentRes}= require('./controller/logic.js')


const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("index.ejs",{removePath:false})
})

app.post('/login',logIn)

app.get('/student/:rollnum',studentRes)

app.get('/leaderboard',leaderboardRes)


app.use((req,res,next)=>{
    res.setHeader('Status',404)
    res.render('error.ejs',{removePath:false,message:"404 Page not found"})
    next()
})

main().then(result=>{
    app.listen(port)
})
