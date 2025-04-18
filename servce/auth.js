const sessionIdToUser = new Map();
function setUser(id,user){
    sessionIdToUser.set(id,user);
    //console.log(sessionIdToUser);
}
function getUser(id){
    return sessionIdToUser.get(id);
}

export const auth = {
    setUser,
    getUser
}