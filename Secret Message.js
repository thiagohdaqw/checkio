function findMessage(data) {
    let SecretMsg = "";
    for(let msg of data){
       if(msg.charCodeAt()>64 && msg.charCodeAt()<91)
       SecretMsg += msg
        }
    return SecretMsg;
}
