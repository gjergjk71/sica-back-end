"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let ReferalToken = sequelize.define('ReferalToken', {
        code: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, options);

    ReferalToken.associate = models => {
        ReferalToken.belongsTo(models.User);
        ReferalToken.belongsToMany(models.User, {
            as: "ReferedUser",
            through: models.UserReferal
        })    
    }

    return ReferalToken;
};
