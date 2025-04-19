import { auth } from "../servce/auth.js";

function restrictToLoggedInUser(req,res,next){
    const userId = req.cookies?.uid;
    if(!userId) return res.redirect("/login");
    const user = auth.getUser(userId);
    if(!user) return res.redirect("/login");

    req.user = user ;
    next();
}

export const middle ={
    restrictToLoggedInUser,
}