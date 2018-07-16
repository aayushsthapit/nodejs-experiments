import Signup from '../models/signup';

/**
 * 
 * @param {Object} signup 
 * @returns {Promise}
 */
export function postSignup(signup)
{
    console.log(signup.password);
    let  bcrypt=require('bcrypt');  
    const saltRounds = 10;

    return bcrypt.hash(signup.password,saltRounds).then(hash=>
        {
            if(!hash)
            {
                throw new Boom.notFound('Signup failed');
            }
            new Signup({username:signup.username,password:hash}).save();
            return hash;
        })
}
