const mongoose = require("mongoose");
// const connect= mongoose.connect("mongodb+srv://Shashh_454:shashu_pai@cluster0.7c9qirc.mongodb.net/");
const connect = mongoose.connect('mongodb+srv://Shashh_454:shashu_pai@cluster0.7c9qirc.mongodb.net/Login');

connect.then(()=>{
    console.log("Database Connected Successfully");

})

.catch(()=>{
    console.log("Database cannot be connected");
})

const logInSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});


const collection = new mongoose.model("users",logInSchema);

module.exports=collection;
