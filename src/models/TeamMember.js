"use strict"

module.exports = (sequelize, DataTypes) => {
    let options = {}
    let TeamMember = sequelize.define('TeamMember', {
        status: {
            type: DataTypes.ENUM("PENDING","ACCEPTED","REJECTED","REMOVED"),
            allowNull: false,
            defaultValue: "PENDING"
        }
    }, options);

    TeamMember.associate = models => {
    }

    return TeamMember;
};
