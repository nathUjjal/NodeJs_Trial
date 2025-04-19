import express from "express" ;
import {func} from "../Controllers/userController.js";
import { middle } from "../middleware/authenticate.js";

export const router = express.Router();

router.post('/authenticate',func.authenticate);

router.post('/addUserSignUp',func.addUserSignUp);

router.get('/signup',func.signUp);

router.get('/home',middle.restrictToLoggedInUser,(req,res)=>{
    return res.render('home');
})

router.get('/test',middle.restrictToLoggedInUser,(req,res)=>{
    return res.render('test');
})

router.get('/login',func.login);