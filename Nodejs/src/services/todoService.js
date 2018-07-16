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


/**
 * @param {Object} query
 */

export function handleFilter(query)
{
    const sort_by= query.sort_by || 'id';
    const sort_order= query.sort_order || 'ASC';
    const page=query.page || '1';

    return new Books()
    .query((qb)=>
    {  
        if(query.category_id)    
        {
            qb.select('*').from('books').join('books_categories', {'books.id': 'books_categories.book_id'})
            .where({category_id:query.category_id})
        }
        if(query.name)
        {
            qb.where('name','LIKE',query.name);   
        }        
    })
    .orderBy(sort_by,sort_order)
    .fetchPage({
        pageSize:query.per_page,
        page:page
    })
    .then(       
        data=>
        {
            return data;
        })
}