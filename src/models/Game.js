"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let Game = sequelize.define('Game', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, options);

    Game.associate = models => {
        
    }

    return Game;
};
