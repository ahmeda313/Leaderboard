const mongoose = require('mongoose')

async function main(){

    return await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zvozaan.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Cluster0`)

    
}

module.exports=main