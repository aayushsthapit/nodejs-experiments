/**
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('user_refresh_tokens', table => {
    table.increments();
    table.string('username').notNull();
    table.varchar('refreshtoken').notNull();
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('user_refresh_tokens');
}
