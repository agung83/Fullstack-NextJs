
exports.up = function (knex) {
    return knex.schema
        .createTable('ms_post', function (table) {
            table.increments('id');
            table.string('title', 255).notNullable();
            table.text('content').notNullable();
            table.text('slug').notNullable();
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("ms_post")

};
