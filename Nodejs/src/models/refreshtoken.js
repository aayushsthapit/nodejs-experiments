import bookshelf from '../db';

const TABLE_NAME = 'user_refresh_tokens';

class RefreshTokens extends bookshelf.Model
{
    get tableName()
    {
        return TABLE_NAME;
    }
}

export default RefreshTokens;