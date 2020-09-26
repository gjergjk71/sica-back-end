"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let StoreItem = sequelize.define('StoreItem', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, options);

    StoreItem.associate = models => {
        StoreItem.belongsToMany(models.User, {
            as: "UserOwnedStoreItems",
            through: models.UserOwnedStoreItem
        })
    }

    return StoreItem;
};
