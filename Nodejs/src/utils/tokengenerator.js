var jwt = require('jsonwebtoken');

/**
 * 
 * @param {String} username 
 * @return {Promise}
 */
export function getAccessToken(username)
{
    //Acess token expiry time 5 minutes.
    let accesstoken=jwt.sign({username},'secretkey',{ expiresIn: 60*5 });
    return accesstoken;
}
