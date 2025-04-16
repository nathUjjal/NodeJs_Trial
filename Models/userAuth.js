import mongoose from "mongoose";

const userPasswordSchema = mongoose.Schema({
    name : {
        Type : String ,
        required : true
    },
    email : {
        Type : String ,
        unique : true 
    },
    password : {
        Type : String ,
        required : true,
        unique : true 
    }
    },{ timstamps : true }
);

export const user_auth = mongoose.model('userPassword',userPasswordSchema);