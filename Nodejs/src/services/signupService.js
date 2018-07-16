import Signup from '../models/signup';

export function postSignup(signup)
{
    console.log(signup.password);
    let  bcrypt=require('bcrypt');  
    const saltRounds = 10;

    return bcrypt.hash(signup.password,saltRounds).then(hash=>
        {
            console.log("INaaaaaaaaaaaaaNNNNNNNNNNNNN")
            new Signup({username:signup.username,password:hash}).save();
            return hash;
        })
        .catch(console.log("INNNNNNNNNNNNNNNNNNNNNNNNNNNN"));

}


export function getPassword(body)
{
    console.log(body);
    return new Signup({username:body}).fetch()
    .then(user=>
    {
        return user.get('password');
    });

}