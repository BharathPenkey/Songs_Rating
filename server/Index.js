

//mongodb+srv://bharath:<password>@cluster0.w1gr51t.mongodb.net/?retryWrites=true&w=majority

const express = require('express')
const mongoose = require('mongoose')
const app = express()


// routes
const router=require('./routes/Routes')
const songRoutes = require('./routes/Routes')

// middleware
app.use(express.json())


app.use('/api', router); 
app.use('/api', songRoutes);   


mongoose.connect("mongodb+srv://bharath:bharath@cluster0.w1gr51t.mongodb.net/songsApp?retryWrites=true&w=majority"
).then(()=>{
console.log('connected to db ')
})
.then(()=>{
    app.listen(5007)
})
.then(console.log("server running on port 5007"))
.catch((err)=>{
    console.log(err)
})

