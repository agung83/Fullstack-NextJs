
exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id_users');
            table.string('nama', 255).notNullable();
            table.text('username').notNullable();
            table.text('password').notNullable();
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("users")
};
