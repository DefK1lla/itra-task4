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
            for (let i = 0; i < request.body.userIds.length; i++) {
                await User.findByIdAndUpdate(request.body.userIds[i], { status: 'Blocked' });
            }

            this.getAll(request, response);
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };

    unblockById = async (request, response) => {
        try {
            for (let i = 0; i < request.body.userIds.length; i++) {
                await User.findByIdAndUpdate(request.body.userIds[i], { status: 'Not blocked' });
            }

            this.getAll(request, response);
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };

    deleteById = async (request, response) => {
        try {
            for (let i = 0; i < request.body.userIds.length; i++) {
                await User.findByIdAndDelete(request.body.userIds[i]);
            }

            this.getAll(request, response);
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    };
};

module.exports = new UsersController();