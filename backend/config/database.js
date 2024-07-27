const mongoose=require('mongoose');




const conectDatabase=()=>{
    const url="mongodb+srv://rizwan2021:rizwan2021@cluster0.l6lub.mongodb.net/";
   
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
        console.log("database connected");
    })
}

module.exports=conectDatabase;