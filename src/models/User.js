"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {
        defaultScope: {
            attributes: { exclude: ["password"] },
        },
        scopes: {
            withPassword: {
                attributes: {},
            },

        }
    }
    let User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "not-set"
        },
        full_name: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATEONLY
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
    }, options);

    User.associate = models => {
        User.hasOne(models.Space)
        User.belongsToMany(models.Post, {
            as: "SpaceSubscriptions",
            through: models.SpaceSubscription
        })
        User.belongsToMany(models.Team, {
            as: "TeamMembers",
            through: models.TeamMember
        })
        User.belongsToMany(models.Tournament, {
            as: "TournamentParticipants",
            through: models.TournamentParticipant
        })
        User.belongsToMany(models.StoreItem, {
            as: "UserOwnedStoreItems",
            through: models.UserOwnedStoreItem
        })
        User.belongsToMany(models.ReferalToken, {
            as: "ReferedUser",
            through: models.UserReferal
        })
    }

    return User;
};
