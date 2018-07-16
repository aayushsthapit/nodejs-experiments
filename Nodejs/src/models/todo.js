import bookshelf from '../db';
import category from './category';
import user from './user';

const TABLE_NAME = 'books';

class Books extends bookshelf.Model
{
    get tableName()
    {
        return TABLE_NAME;
    }

    get hasTimestamps() {
        return true;
      }

    category()
    {
        return this.belongsToMany(category);
    }

    user()
    {
        return this.belongsTo(user);
    }
}

export default Books;