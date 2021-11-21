const User = require("./User");
const Bucket = require("./Bucket");

User.hasMany(Bucket, {
    onDelete: 'CASCADE'
});

Bucket.belongsTo(User);

module.exports = { User, Bucket };
