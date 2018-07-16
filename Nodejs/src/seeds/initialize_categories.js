/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('categories')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('categories').insert([
          {
            name: 'Sci-fi',
            created_at: new Date(),
            updated_at:new Date()
          },
          {
            name: 'Fiction',
            created_at: new Date(),
            updated_at:new Date()
          },
          {
            name:'Drama',
            created_at: new Date(),
            updated_at:new Date()
          },
          {
            name:'Thriller',
            created_at: new Date(),
            updated_at:new Date()
          }
        ])
      ]);
    });
}
