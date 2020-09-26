"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let Tournament = sequelize.define('Tournament', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        team_size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bench_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        featured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, options);

    Tournament.associate = models => {
        Tournament.belongsToMany(models.User, {
            as: "TournamentParticipants",
            through: models.TournamentParticipant
        })
        Tournament.belongsTo(models.Game);
    }

    return Tournament;
};
