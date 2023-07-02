const express =require('express');
const app= express();
const port =8000;
const mongoose=require('./config/mongoose');
const home_Route=require('./Routes/Home_Route');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./Assets'));

app.use('/',home_Route);


app.listen(port,(err)=>{
    if(err){
        console.log(`Error While Creating Server ${err}`);
    }
    console.log(`Server is up and Running at port ${port}`);
})