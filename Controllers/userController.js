import {user_auth} from "../Models/userAuth.js"
import {v4} from "uuid" ;
import { auth } from "../servce/auth.js";

async function addUserSignUp(req,res) {
    const body = req.body ;
    //console.log(body);
    const user = await user_auth.create({
        name : body.name,
        email : body.Email,
        password : body.password,
    });
    //console.log(user);
    return res.redirect('/home');
}

async function authenticate(req,res) {
    const body = req.body ;
    const user = await user_auth.findOne({
        name : body.name,
        password : body.password,
    });
    if(!user) return res.render('login');
    const sessionId = v4();
    //console.log(sessionId);
    auth.setUser(sessionId,user);
    res.cookie("uid",sessionId);
    return res.redirect('/home');
}

function login( _ ,res){
    return res.render('login');
}
function signUp( _ ,res){
    return res.render('signup');
}


export const func = {
    addUserSignUp,
    authenticate,
    login,
    signUp,
}