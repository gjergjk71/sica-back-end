
const yup = require("yup");
const { username, password } = require("../utils/validations");

module.exports = {
    post_users: yup.object().shape({
        requestBody: yup.object().shape({
            username: username.required(), 
            password: password.required(), 
            full_name: yup.string().required(),
            country: yup.string().required(),
            birthday: yup.date().required(),
            referal_number: yup.number().integer().required(),
            isAdmin: yup.boolean().required()
        })
    }),
}