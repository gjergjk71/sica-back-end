"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let SpaceSubscription = sequelize.define('SpaceSubscription', {
    }, options);

    SpaceSubscription.associate = models => {
    }

    return SpaceSubscription;
};
