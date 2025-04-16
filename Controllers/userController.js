import {user_auth} from "../Models/userAuth.js"

async function authenticate(req,res) {
    const body = req.body ;
    console.log(body);
    await user_auth.create({
        name : body.name,
        password : body.password,
    })
    home(res);
}

function login( _ ,res){
    res.render('login');
}
function home(res){
    res.render('home');
}

export const func = {
    authenticate,
    login,
    home,
}