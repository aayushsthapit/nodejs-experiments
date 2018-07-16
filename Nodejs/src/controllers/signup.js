import { Router } from 'express';
import * as signupService from '../services/signupService';


const router = Router();

router.post('/',(req,res,next)=>
{
  signupService.postSignup(req.body)
  .then(data=>res.json({data}))
  .catch(err=>res.json(err));
});

export default router;


