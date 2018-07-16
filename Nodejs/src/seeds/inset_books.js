/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('books')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('books').insert([
          {
            name: 'Aayush',
            created_at: new Date(),
            updated_at:new Date()
          },
          {
            name: 'Lenovo',
            created_at: new Date(),
            updated_at:new Date()
          }
        ])
      ]);
    });
}
