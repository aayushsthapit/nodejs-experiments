import { Router } from 'express';
import * as signupService from '../services/signupService';


const router = Router();


router.get('/:name',(req,res,next)=>
{
    signupService.getPassword(req.params.name)
    .then(data=>res.json({data}))
    .catch(err=>res.json(err));
})

router.post('/',(req,res,next)=>
{
    console.log(req.body);
    signupService.postSignup(req.body)
  .then(data=>res.json({data}))
  .catch(err=>res.json(err));
});

export default router;


