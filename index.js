const express = require("express")
const cors=require("cors")
const mongoose= require("mongoose")
const app= express()
const user = require("./models/user")

mongoose.connect("mongodb://localhost:27017/biba")

//mi

app.use(express.json())
app.use(cors())


app.post("/signup",async(req,resp)=>{
    const data=new user(req.body)
    const result = await data.save()







    
    console.log(result)
    resp.send("kaam ho gya")

    
})

app.listen(5000)






