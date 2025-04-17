import mongoose from "mongoose";

const userPasswordSchema = mongoose.Schema({
    name : {
        type : String ,
        required : true ,
    },
    email : {
        type : String ,
        unique : true ,
    },
    password : {
        type : String ,
        required : true,
        unique : true ,
    }
    },{ timstamps : true }
);

export const user_auth = mongoose.model('userPassword',userPasswordSchema);