const express=require('express')
const app=express();
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")));
const userModel=require('./usermodel');
app.get('/',(req,res)=>{
    res.send("good server easily create")
})

app.get('/create', async (req,res)=>{
    let createuser=await userModel.create(  
        {
            name:"harsh",
            email:"harah@",
            username:"harsh"
        }
    )
    res.send(createuser)
})


app.listen(4000,()=>{
    console.log("complete run the server");
})