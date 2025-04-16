function authenticate(req,res) {
    const body = req.body ;
    console.log(body);
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