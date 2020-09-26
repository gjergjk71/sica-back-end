"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, options);

    Post.associate = models => {
        Post.belongsTo(models.Space)
        Post.hasOne(models.Tournament)
        Post.belongsToMany(models.User, {
            as: "SpaceSubscriptions",
            through: models.SpaceSubscription
        })
    }

    return Post;
};
