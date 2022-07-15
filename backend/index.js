import express  from "express";
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/mybackendDB", 
      {useNewUrlParser: true,
        useUnifiedTopology: true
      }, () => {
        console.log("DB connected")
      })

      const userSchema = new mongoose.Schema({
        username: String,
        emailId: String,
        password:String,
        section:String,
        batch:String,

      })

      const User = new mongoose.model("User" ,userSchema)


    //   routes
      app.post("/login", (req, res)=> {
        const { username, password} = req.body
        User.findOne({ username: username}, (err, user) => {
            if(user){
                if(password === user.password ) {
                    res.send({message: "Login Successfull", user: user})
                } else {
                    res.send({ message: "Password didn't match"})
                }
            } else {
                res.send({message: "User not registered"})
            }
        })
    }) 
    
    app.post("/register", (req, res)=> {
        const { username, Email, password, Section, body} = req.body
        User.findOne({Email: Email, username: username}, (err, user) => {
            if(user){
                res.send({message: "User already registerd"})
            } else {
                const user = new User({
                    username,
                    Email,
                    password,
                    Section,
                    body
                })
                user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })
            }
        })
        
    }) 

 

      app.listen(9002,() => {
      
      })