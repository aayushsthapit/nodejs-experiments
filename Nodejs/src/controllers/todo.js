import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todoService';
import { findBook } from '../validators/bookValidator';
import {authenticate} from '../middlewares/authentication';

const router = Router();

router.get('/', authenticate,(req, res, next) => {
  if(req.query.name || req.query.sort_by || req.query.sort_order || req.query.per_page || req.query.page || req.query.bookname || req.query.category_id)
{
  todoService.handleFilter(req.query)
  .then(data=>res.json({data}))
  .catch(err=>res.json(err));
}

  if(!req.query.name && !req.query.sort_by &&!req.query.sort_order && !req.query.per_page &&!req.query.page && !req.query.bookname && !req.query.category_id)
{
    todoService
    .getAllBooks()
    .then(data=>res.json({data}))
    .catch(err=>next(err));
}
   
});

router.post('/',authenticate,(req,res,next)=> {
    todoService
    .createBooks(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err=> next(err));
  });

router.put('/:id',authenticate,(req,res,next)=>
{
  todoService
  .updateBooks(req.params.id,req.body)
  .then(data=> res.json({data}))
  .catch(err=>next(err));
})

router.delete('/:id',authenticate, findBook, (req,res,next)=>
{
  todoService
  .deleteBooks(req.params.id)
  .then(data=>res.status(HttpStatus.NO_CONTENT).json({data}))
  .catch(err=>next(err));
});
  
  export default router;