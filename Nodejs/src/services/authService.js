import Signin from '../models/signup';
import * as tokenGenerator from "../utils/tokengenerator";
import RefreshTokens from '../models/refreshtoken';
import Boom from 'boom';

/**
 * 
 * @param {Object} credentials 
 * @return {Promise}
 */
export function signin(credentials)
{
    var bcrypt = require('bcrypt');

    return new Signin({username:credentials.username}).fetch().then(user=>
    {
        if (!user) 
        {
            throw new Boom.notFound('User has not signed up');
        }
       return bcrypt.compare(credentials.password, user.get('password')).then(function(res) 
        {         

            if(res)
            {
                //    Generate access token and refresh token.                     
                return new RefreshTokens({username:credentials.username}).fetch().then(user=>
                {
                    if (!user) 
                    {
                        let accesstoken= tokenGenerator.getAccessToken(credentials.username);
                        const uuidv4 = require('uuid/v4');
                        let refreshtoken=uuidv4(); 
                        new RefreshTokens({username:credentials.username,refreshtoken}).save();
                        return {accesstoken,refreshtoken};                        
                    }
                    if(user)
                    {
                        throw new Boom.notFound('Already signed in');
                    }

                })            
            }

            if(!res)
            {
                throw new Boom.notFound('Invalid password');
            }
        });
    })
}

/**
 * 
 * @param {Object} credentials 
 * @return {Promise}
 */
export function refresh(credentials)
{  
    return new RefreshTokens({refreshtoken:credentials.refreshtoken}).fetch().then(refreshtoken=>
    {  
        if(!refreshtoken)
        {
            throw new Boom.notFound('Not signed in');
        }
        let accesstoken= tokenGenerator.getAccessToken(refreshtoken.get('username'));      
        return accesstoken;
    });

}

/**
 * 
 * @param {Object} credentials 
 * @return {Promise}
 */
export function signout(credentials)
{
    new RefreshTokens({refreshtoken:credentials.refreshtoken}).fetch().then(refreshtoken=>refreshtoken.destroy());
    throw new Boom.notFound('Logged out.(Refresh token deleted.)'); 
}