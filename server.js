

const express = require('express');
const db=require('mongoose');
const multer=require('multer');
const ImageModel=require('./imageModel');
const bodyparser=require('body-parser');
const app = express();
const port = 3000;
app.use(bodyparser.json());


db.connect('mongodb://localhost:27017/test_db',{family:4});

db.connection.on('error',console.error.bind(console,"Error While"));

db.connection.once('open',()=>{
    console.log('DB Connected');
});


const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }

});


const upload=multer({
    storage:storage
}).single('image');



app.post('/upload',(req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }else{
            
            const newImage= new ImageModel({
                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:"image/png"
                }

            });

            newImage.save();
        }

        res.send("Saved")
    })
})










app.listen(port, () => console.log(`Example app listening on port ${port}!`))