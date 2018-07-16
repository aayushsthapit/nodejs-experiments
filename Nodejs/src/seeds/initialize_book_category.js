/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('book_category')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('book_category').insert([
          {
            book_id: '8',
            categories_id: '3',
            created_at: new Date(),
            updated_at:new Date()

          },
          {
            book_id: '8',
            categories_id: '4',
            created_at: new Date(),
            updated_at:new Date()
          },
          {
            book_id: '8',
            categories_id: '5',
            created_at: new Date(),
            updated_at:new Date()

          },
          {
            book_id: '7',
            categories_id: '3',
            created_at: new Date(),
            updated_at:new Date()
          },
          {
            book_id: '9',
            categories_id: '4',
            created_at: new Date(),
            updated_at:new Date()

          },
          {
            book_id: '10',
            categories_id: '5',
            created_at: new Date(),
            updated_at:new Date()
          },
          {
            book_id: '11',
            categories_id: '3',
            created_at: new Date(),
            updated_at:new Date()

          },
          {
            book_id: '6',
            categories_id: '4',
            created_at: new Date(),
            updated_at:new Date()
          }
        ])
      ]);
    });
}
