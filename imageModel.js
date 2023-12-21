

const mongoose=require('mongoose');

const ImageSchema={
    name:{
        type:String
    },image:{
        data:Buffer,
        ContentType:String
    }
}

module.exports=ImageModel=mongoose.model('imageModel',ImageSchema);