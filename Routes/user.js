import express from "express" ;
import {func} from "../Controllers/userController.js";

export const router = express.Router();

router.post('/authenticate',func.authenticate);

router.get('/login',func.login);