"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let Team = sequelize.define('Team', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        invite_code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, options);

    Team.associate = models => {
        Team.belongsTo(models.Game);
        Team.belongsToMany(models.User, {
            as: "TeamMembers",
            through: models.TeamMember
        })
    }

    return Team;
};
