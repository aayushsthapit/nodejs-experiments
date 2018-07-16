
import Category from '../models/category';


/**
* @return {Promise}
*/

export function getAllCategories()
{
    return Category.fetchAll();
}

/**For getting a specific row by id.
 * 
 * @param {Number} id
 * @return {Promise} 
 */
export function getCategory(id) {
    return new Category({ id }).fetch().then(category => {
      if (!category) {
        throw new Boom.notFound('User not found');
      }
  
      console.log(category);
      return category;
    });
  }


/**Create a category
 * 
 * @param {String} category 
 * @return {Promise}
 */
  export function createCategory(category)
  {
    return new Category({name:category.name}).save().then(category=>category.refresh());
  }

  /**Update a field of category
   * 
   * @param {Integer} id 
   * @param {String} category 
   * @return {Promise}
   */
  export function updateCategory(id,category)
  {
      return new Category({id}).save({name:category.name}).then(category=>category.refresh());
  }

  
  export function deleteCategory(id)
  {
      return new Category({id}).fetch()
      .then(category=>category.destroy());
  }