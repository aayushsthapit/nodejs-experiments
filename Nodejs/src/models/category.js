import bookshelf from '../db';
import books from './todo';

const TABLE_NAME = 'categories';

class Category extends bookshelf.Model
{
    get tableName()
    {
        return TABLE_NAME;
    }

    get hasTimestamps() {
        return true;
      }

    books() 
    {
        return this.belongsToMany(books);
    }
}

export default Category;