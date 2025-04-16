function authenticate(req,res) {
    const body = req.body ;
    console.log(body);
    return res.send('success');
}

function login( _ ,res){
    res.render('home');
}

export const func = {
    authenticate,
    login,
}