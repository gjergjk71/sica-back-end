
const { User } = require("../../models")
const { v1: uuid } = require('uuid')

const SALT_ROUNDS = 10;

const bcrypt = require("bcrypt");
const { ErrorHandler } = require("../../utils/error");

module.exports = {
    findAll: async () => await User.findAll(),
    deleteUser: async pk => {
        let user = await User.findByPk(pk)
        user.destroy();
        return true;
    },
    createUser: async ({
        username, password, full_name, country, birthday, referal_number, isAdmin
    }) => {
        let data = {
            username, password: await bcrypt.hash(password, SALT_ROUNDS),
            full_name, country, birthday, referal_number, isAdmin
        }
        let referal;
        if (referal_number){
            referal = await findReferalToken(referal_number)
            if (!referal_number) throw new ErrorHandler(304, "Referal token not found", [ "Referal code is invalid" ])
        }
        let user, user_referal;
        try {
            user = await User.create(data)
            user_referal = await createUserReferal({ UserId: user.id, ReferalTokenId: referal.id })
        } catch (err){
            if (user) await user.destroy();
            if (user_referal) await user_referal.destroy();
            throw err;
        }
        return user;
    },
    updateUser: async ({pk,data}) => {
        let keys = Object.keys(data);
        let user = await User.findByPk(pk);
        for (let key of keys){
            user[key] = key === "password" ? await bcrypt.hash(data[key] , SALT_ROUNDS) : data[key]
        }
        await user.save();
        return user;
    }
}