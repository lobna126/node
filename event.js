function greatUser(username, callback){
callback(username)
}
function morningGretting(username){
    console.log(`good morning ${username}`);
callback(username)
}
function eveningGreeting(username){
    console.log(`good evening  ${username}`);
}
greatUser("lobna", morningGretting)
greatUser("lobna", eveningGreeting)