const express = require("express")
const cors= require("cors")
const app = express()
const mongoose= require("mongoose")
const user = require("./models/user")


app.use(express.json())
app.use(cors())




app.post("/signup", async(req,resp)=>{
    

    const data= new user(req.body)
    const result= await data.save()
    resp.send("registerd")
})







app.listen(5000)
