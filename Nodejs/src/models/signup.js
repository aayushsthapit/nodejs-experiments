import bookshelf from '../db';


const TABLE_NAME='signup';

class Signup extends bookshelf.Model
{
    get tableName()
    {
        return TABLE_NAME;
    }

    get hasTimestamps()
    {
        return true;
    }
}

export default Signup;