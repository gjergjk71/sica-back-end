"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let TournamentParticipant = sequelize.define('TournamentParticipant', {
    }, options);

    TournamentParticipant.associate = models => {
    }

    return TournamentParticipant;
};
