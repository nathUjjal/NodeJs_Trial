import express from "express" ;
import { router } from "./Routes/user.js";
import path from "path";
import {connection} from "./connection.js"
import cookieParser from "cookie-parser";

const PORT = 8001 ;

const app = express();

connection.connectToDB("mongodb://localhost:27017/authentication");

app.set("view engine","ejs");
app.set("views",path.resolve("./views")) ;

app.use(express.urlencoded({ extended : false}));
app.use(cookieParser());

app.use('/',router);

// console.log("hello world");

app.listen(PORT,() => console.log(`Server Started at ${PORT}`));
