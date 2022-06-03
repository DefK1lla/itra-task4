const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');

class AuthController {
    async registration(request, response) {
        try {
            const { username, email, password } = request.body;
            if (username === '' || email === '' || password === '') return response.json({ message: "Fill in the field", success: false });

            const isExistsEmail = await User.findOne({ email });
            if (isExistsEmail) return response.json({ message: "email exists", success: false });

            const isExistsUsername = await User.findOne({ username });
            if (isExistsUsername) return response.json({ message: "username exists", success: false });

            const userData = {
                username,
                email,
                password: await bcrypt.hash(password, 7),
                reg_date: new Date().toLocaleDateString(),
                status: 'Not blocked',
            }
            const user = new User(userData);
            await user.save();

            return response.json({ message: "User was created", success: true });

        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    }

    async login(request, response) {
        try {
            const { username, password } = request.body;
            if (username === '' || password === '') return response.json({ message: "Fill in the field" });

            const user = await User.findOne({ username });
            if (!user) return response.json({ message: "User not found" });
            if (user.status === 'Blocked') return response.json({ message: "User blocked" });

            const isPassValid = bcrypt.compareSync(password, user.password);
            if (!isPassValid) return response.json("Invalid password");

            const secretKey = config.get('secretKey');
            const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

            user.update({
                last_login_date: new Date().toLocaleDateString()
            });

            return response.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    last_login_date: user.last_login_date
                }
            });

        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    }

    async authentication(request, response) {
        try {
            const user = await User.findOne({ _id: request.user.id });

            const secretKey = config.get('secretKey');
            const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

            user.update({
                last_login_date: new Date().toLocaleDateString()
            });

            return response.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    last_login_date: user.last_login_date
                },
                success: true
            });
        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    }
};

module.exports = new AuthController();