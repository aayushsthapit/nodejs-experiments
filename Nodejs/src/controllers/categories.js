import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as categoriesService from '../services/categoriesService';
import bookshelf from '../db';
import { retrieveSourceMap } from 'source-map-support';

const router = Router();

router.get('/', (req, res, next) => {
  categoriesService
    .getAllCategories()
    .then(data=>res.json({data}))
    .catch(err=>next(err));
  });

router.get('/:id',(req,res,next)=>
{
  categoriesService.getCategory(req.params.id)
  .then(data=>res.json({data}))
  .catch(err=>res.json(err));
});

router.post('/',(req,res,next)=>
{
  categoriesService.createCategory(req.body)
  .then(data=>res.json({data}))
  .catch(err=>res.json(err));
});

router.put('/:id',(req,res,next)=>
{
  categoriesService.updateCategory(req.params.id,req.body)
  .then(data=>res.json({data}))
  .catch(err=>res.json(err));
});

router.delete('/:id',(req,res,next)=>
{
  categoriesService.deleteCategory(req.params.id)
  .then(data=>res.json(data))
  .catch(err=>res.json(err));
});

export default router;