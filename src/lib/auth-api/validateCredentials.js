const { ErrorHandler } = require("../../utils/error")
const bcrypt = require("bcrypt")

let { User } = require("../../models")

const INVALID_CREDENTIALS_ERROR = new ErrorHandler(400, "Invalid credentials", [
    "Username or password is incorrect. Please try again."
])

module.exports = async ({ username, password }) => {
    let user = await User.scope('withPassword').findOne({ where: { username } })
    if (!user) throw INVALID_CREDENTIALS_ERROR
    console.log(password,user.password)
    const match = await bcrypt.compare(password, user.password);
    console.log({ match })
    user.password = undefined
    if (match) return user;
    else throw INVALID_CREDENTIALS_ERROR

}
