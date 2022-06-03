const User = require('../models/User');

class UsersController {
    async getAll(request, response) {
        try {
            const users = await User.find();
            return response.json(users.map(user => {
                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    last_login_date: user.last_login_date,
                    registration_date: user.reg_date,
                    status: user.status
                }
            }));
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };

    async update(request, response) {
        try {

        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };

    async delete(request, response) {
        try {
            console.log(request.body)
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };
};

module.exports = new UsersController();