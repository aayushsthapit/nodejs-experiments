var jwt = require('jsonwebtoken');
export function getAccessToken(username)
{
    let accesstoken=jwt.sign({username},'secretkey',{ expiresIn: 60*5 });
    return accesstoken;
}
