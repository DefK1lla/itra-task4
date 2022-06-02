function cors(request, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept, Authorization');
    next();
}

module.exports = cors;