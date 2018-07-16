import Books from '../models/todo';
import Category from '../models/category';
/**
* @return {Promise}
*/

export function getAllBooks()
{
    return Books.fetchAll();

    // console.log(Books.where({id: 8}).fetch({withRelated: 'category'}));
}

export function getBook(id){

    return new Books({id:id}).fetch();
}
/**
 * Create books
 * @param {Object} books
 * @return {Promise}
 */

 export function createBooks(books)
 {
    return new Books({name:books.name}).save().then(books=>books.refresh());
 }

 /***
  * Update a user
  * 
  * @param { Number } id
  * @param {Object}   book
  * @return {Promise}
  */

  export function updateBooks(id, book)
  {
      return new Books({id}).save({name:book.name}).then(book=>book.refresh());
  }

  /**
   *  Delete a user.
   * @param {Number} id
   * @param {Object} book
   * @return {Promise}
   */

   export function deleteBooks(id)
   {
       return new Books({id}).fetch().then(user=>user.destroy());
   }


   export function getBooksbytitle(name)
   {
        return Books.query((qb)=>
        {
            qb.where('name','LIKE',name);
        }).fetchAll();
   }


   export function getBooksbycategory(name)
   {
       
       return new Books({name}).fetch({withRelated:'category'})
       .then(catego=>
        {
            if(!catego)
            {
                throw new Boom.notFound('Not found');
            }
            return catego;
        });


   }

   export function getBooksbycategoryid(id)
   {
       
       return new Category({id}).fetch({withRelated:'books'})
       .then(catego=>
        {
            if(!catego)
            {
                throw new Boom.notFound('Not found');
            }
            return catego;
        });


   }

/**
 * Sort by bookname.
 * @return {Promise}
 */
export function getSortedbyTitle(sort_by,sort_order)
{
    return new Books().orderBy(sort_by,sort_order).fetchAll();
}


export function getPagination(per_page,page)
{  
    return new Books().fetchPage({
        pageSize:per_page,
        page:page
    }).then(       
        data=>
        {
            return data;
        })
}
