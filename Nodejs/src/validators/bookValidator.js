import Joi from 'joi';
// import validate from '../utils/validate';
import * as bookService from '../services/todoService';

const SCHEMA = {
  name: Joi.string()
    .label('Name')
    .max(90)
    .required()
};


/**
 * Validate users existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function findBook(req, res, next) {

  return bookService
    .getBook(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

export { findBook };
