const mongoose=require('mongoose');
const connection=mongoose.connect('mongodb+srv://davesujal12:0luzvUU0oqRT5G1w@cluster0.z9dwfdd.mongodb.net/MYTODO?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("DB is Connected");
});
module.exports=connection;