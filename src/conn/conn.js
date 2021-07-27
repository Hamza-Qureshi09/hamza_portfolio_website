const mongoose=require("mongoose");
mongoose.connect(process.env.DB_CONN,{
    useCreateIndex:false,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection to Db is Successful!")
}).catch((err)=>{
    console.log(`connection error 👉 ${err}`)
})