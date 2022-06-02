const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = (request, response, next) => {
    if (request.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = request.headers.authorization;
        if (!token) return response.status(401).json({ message: 'Auth error' });

        const secretKey = config.get('secretKey');
        const decoded = jwt.verify(token, secretKey);

        request.user = decoded;
        next();
    } catch (e) {
        console.log(e);
        return response.status(401).json({ message: 'Auth error' });
    }
}