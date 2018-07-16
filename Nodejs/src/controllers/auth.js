import { Router } from 'express';
import * as authService from '../services/authService';

const router=Router();

router.get('/signin',(req,res,next)=>
{
    authService.signin(req.headers)
    .then(data=>res.json({data}))
    .catch(err=>next(err));
});


router.get('/refresh',(req,res,next)=>
{
    authService.refresh(req.headers)
    .then(data=>res.json({data}))
    .catch(err=>next(err));
})

router.get('/signout',(req,res,next)=>
{
    authService.signout(req.headers)
    .then(data=>res.json({data}))
    .catch(err=>res.json(err));
})

export default router;