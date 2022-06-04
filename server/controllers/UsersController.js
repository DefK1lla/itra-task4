const User = require('../models/User');

class UsersController {
    getAll = async (request, response) => {
        try {
            const users = await User.find();
            return response.json({
                users: users.map(user => {
                    return {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        last_login_date: user.last_login_date,
                        registration_date: user.reg_date,
                        status: user.status
                    };
                }),
            });
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };

    blockById = async (request, response) => {
        try {
            for (let element of request.body.userIds) {
                await User.findByIdAndUpdate(element, { status: 'Blocked' });
            }

            this.getAll(request, response);
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };

    unblockById = async (request, response) => {
        try {
            for (let element of request.body.userIds) {
                await User.findByIdAndUpdate(element, { status: 'Not blocked' });
            }

            this.getAll(request, response);
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };

    deleteById = async (request, response) => {
        try {
            for (let element of request.body.userIds) {
                await User.findByIdAndDelete(element);
            }

            this.getAll(request, response);
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };
};

module.exports = new UsersController();