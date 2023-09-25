const { blacklistToken } = require("../model/blacklisted.model");

const logoutUser = async (req, res) => {
    const token = req.headers.authorization;
    try {
        await blacklistToken(token);
        res.status(200).json({message : "User has been log out successfully..."})
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    logoutUser
}