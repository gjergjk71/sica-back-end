"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let UserReferal = sequelize.define('UserReferal', {
    }, options);

    UserReferal.associate = models => {
    }

    return UserReferal;
};
