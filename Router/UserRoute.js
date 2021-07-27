const express=require("express");
const router=express.Router();
const UserMessage=require("../src/model/schem");

router.get("/",(req,res)=>{
    res.render("index")
})
router.get("/index",(req,res)=>{
    res.render("index")
})


// contact page post method

router.post("/postmessage",async(req,res)=>{
    try{
        const newUser=await UserMessage({
            username:req.body.username,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message
        });
        const result=await newUser.save();
        console.log("Message Send! 😃 Thank You")
        res.redirect("index");
    }catch(error){
        console.log("error occured during send message"+error);
        console.log("Cannot send Message")
    };
})
module.exports=router;