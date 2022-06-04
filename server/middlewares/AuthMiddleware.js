const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');


module.exports = async (request, response, next) => {
    if (request.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = request.headers.authorization.split(' ')[1];
        if (!token) return response.status(400).json({ message: 'Auth error' });

        const secretKey = config.get('secretKey');
        const decoded = jwt.verify(token, secretKey);
        const user = await User.findById(decoded.id);

        if (user === null) {
            response.status(400).json({ message: "User not found" });
        } else if (user.status !== 'Not blocked') {
            response.status(400).json({ message: "You are blocked" });
        } else {
            request.user = decoded;
            next();
        }

    } catch (e) {
        console.log(e);
        return response.status(401).json({ message: 'Auth error' });
    }
}