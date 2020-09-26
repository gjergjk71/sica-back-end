
const yup = require("yup");

module.exports = {
    username: yup.string().min(5),
    password: yup.string().min(8),
}