import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todoService';
import { findBook } from '../validators/bookValidator';
import {authenticate} from '../middlewares/authentication';

const router = Router();

router.get('/',authenticate, (req, res, next) => {
  if(req.query.name)
  {
    todoService.getBooksbytitle(req.query.name)
    .then(data=>res.json({data}))
    .catch(err=>res.json(err));   
  };

  if(req.query.categoryid)
  {    
    todoService.getBooksbycategoryid(req.query.categoryid)
    .then(data=>res.json({data}))
    .catch(err=>res.json(err));
  }

  if(req.query.sort_by || req.query.sort_order)
  {
    const sort_by= req.query.sort_by || 'name';
    const sort_order= req.query.sort_order || 'ASC';

    todoService.getSortedbyTitle(sort_by,sort_order)
    .then(data=>res.json({data}))
    .catch(err=>res.json(err));
  }

  if(req.query.per_page || req.query.page)
  {
    const per_page=parseInt(req.query.per_page)|| 8;
    const page=parseInt(req.query.page) || 1 ;

    todoService.getPagination(per_page,page)
    .then(data=>res.json({data}))
    .catch(err=>res.json(err));
  }

  if(!req.query.name && !req.query.sort_by &&!req.query.sort_order && !req.query.per_page &&!req.query.page && !req.query.bookname && !req.query.categoryid)
  {
    todoService
    .getAllBooks()
    .then(data=>res.json({data}))
    .catch(err=>next(err));
  }
   
  });

router.post('/',(req,res,next)=> {
    todoService
    .createBooks(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err=> next(err));
  });

router.put('/:id',(req,res,next)=>
{
  todoService
  .updateBooks(req.params.id,req.body)
  .then(data=> res.json({data}))
  .catch(err=>next(err));
})

router.delete('/:id', findBook, (req,res,next)=>
{
  todoService
  .deleteBooks(req.params.id)
  .then(data=>res.status(HttpStatus.NO_CONTENT).json({data}))
  .catch(err=>next(err));
});
  
  export default router;