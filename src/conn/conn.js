const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://hamza29061999:hamza29061999@cluster0.rtwit.mongodb.net/Hz_Portfolio?retryWrites=true&w=majority",{
    useCreateIndex:false,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection to Db is Successful!")
}).catch((err)=>{
    console.log(`connection error 👉 ${err}`)
}) 