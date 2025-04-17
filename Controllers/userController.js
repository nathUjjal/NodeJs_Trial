import {user_auth} from "../Models/userAuth.js"

async function addUserSignUp(req,res) {
    const body = req.body ;
    console.log(body);
    const user = await user_auth.create({
        name : body.name,
        password : body.password,
    });
    console.log(user);
    home(res);
}

function login( _ ,res){
    res.render('login');
}
function signUp( _ ,res){
    res.render('signup');
}
function home(res){
    res.render('home');
}

export const func = {
    addUserSignUp,
    login,
    signUp,
    home,
}