
const jwt = require('jsonwebtoken');
import Boom from 'boom';

function authenticate(req,res,next)
{    
    jwt.verify(req.headers.accesstoken, 'secretkey', function(err, payload) 
    {
        if (err) 
        {
            throw new Boom.notFound('Access token invalid.');  
        }
        if(payload)
        {
            return next();
            // if(payload.username===req.headers.username)
            // {
            //     
            // }
            // if(payload.username!==req.headers.username)
            // {
            //     throw new Boom.notFound('Unauthorized user');
            // }
        }
    });
}

export {authenticate}