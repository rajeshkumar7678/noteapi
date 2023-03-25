const express=require("express")
const {uroute}=require("./routes/routes")
const {connection}=require("./db")
const {noteroute}=require("./routes/notes.route")
const {auth}=require("./moddleware/noteverify")
const cors=require("cors")


const app=express()
app.use(cors())
app.use(express.json())

app.use("/home",uroute)

app.use(auth)

app.use("/note",noteroute)



// app.get("/",(req,res)=>{
//     res.send("homepage")

// })











app.listen(7678,async()=>{
    try {
        await connection
        console.log({"msg":"db is running"})
        
        
    } catch (error) {
        console.log({"msg":error})
        
    }
    console.log("server is running")
   
})