"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let UserOwnedStoreItem = sequelize.define('UserOwnedStoreItem', {
    }, options);

    UserOwnedStoreItem.associate = models => {
    }

    return UserOwnedStoreItem;
};
