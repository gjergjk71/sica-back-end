"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = { }
    let Space = sequelize.define('Space', {
        logo_url: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, options);

    Space.associate = models => {
        Space.belongsTo(models.User)
        Space.hasMany(models.Post)
    }

    return Space;
};
