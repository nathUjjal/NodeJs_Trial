import express from "express" ;
import {func} from "../Controllers/userController.js";

export const router = express.Router();

router.post('/authenticate',func.authenticate);

router.post('/addUserSignUp',func.addUserSignUp);

router.get('/signup',func.signUp);
router.get('/home',(req,res)=>{
    return res.render('home');
})

router.get('/login',func.login);