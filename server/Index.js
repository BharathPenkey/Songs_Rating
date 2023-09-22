







//mongodb+srv://bharath:<password>@cluster0.w1gr51t.mongodb.net/?retryWrites=true&w=majority

const express = require('express')
const mongoose = require('mongoose')
const app = express()

// middleware
app.use(express.json())




mongoose.connect("mongodb+srv://bharath:bharath@cluster0.w1gr51t.mongodb.net/songsApp?retryWrites=true&w=majority"
).then(()=>{
console.log('connected to db ')
})
.then(()=>{
    app.listen(5001)
})
.catch((err)=>{
    console.log(err)
})

