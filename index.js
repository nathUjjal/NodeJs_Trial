import express from "express" ;
import { router } from "./Routes/user.js";
import path from "path";

const PORT = 8001 ;

const app = express();

app.use(express.urlencoded({ extended : false}));

app.set("view engine","ejs");
app.set("views",path.resolve("./views")) ;

app.use('/',router);

// console.log("hello world");

app.listen(PORT,() => console.log(`Server Started at ${PORT}`));
