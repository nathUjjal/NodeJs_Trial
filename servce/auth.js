import  jwt  from "jsonwebtoken";
const secret = "$khelahobe$";

function setUser(user){
    return jwt.sign({
        name : user.name,
    },secret);
}
function getUser(token){
    if(!token)return null;
    return jwt.verify(token,secret);
}

export const auth = {
    setUser,
    getUser
}