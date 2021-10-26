
exports.up = function (knex) {
    return knex.schema.table('users', function (table) {
        // table.string('slug').after('nama'); contoh seblum column manakah
        table.text('slug').after('password');
    });
};

exports.down = function (knex) {
    return knex.schema.table('users', function (table) {
        table.dropColumn('slug');
    });
};
