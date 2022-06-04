const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');

class AuthController {
    async registration(request, response) {
        try {
            const { username, email, password } = request.body;
            if (username === '' || email === '' || password === '') return response.status(400).json({ message: "Fill in the field" });

            const isExistsEmail = await User.findOne({ email });
            if (isExistsEmail) return response.status(400).json({ message: "email exists" });

            const isExistsUsername = await User.findOne({ username });
            if (isExistsUsername) return response.status(400).json({ message: "username exists" });

            const userData = {
                username,
                email,
                password: await bcrypt.hash(password, 7),
                reg_date: new Date().toLocaleDateString(),
                status: 'Not blocked',
            }
            const user = new User(userData);
            await user.save();

            return response.json({ message: "User was created" });

        } catch (e) {
            console.log(e);
            response.send({ message: "Server Error" });
        }
    }

    async login(request, response) {
        try {
            const { username, password } = request.body;
            if (username === '' || password === '') return response.status(400).json({ message: "Fill in the field" });

            const user = await User.findOne({ username });
            if (!user) return response.status(400).json({ message: "User not found" });
            if (user.status === 'Blocked') return response.status(400).json({ message: "User blocked" });

            const isPassValid = bcrypt.compareSync(password, user.password);
            if (!isPassValid) return response.status(400).json({ message: "Invalid password" });

            const secretKey = config.get('secretKey');
            const token = jwt.sign({ id: user.id, status: user.status }, secretKey, { expiresIn: '1h' });

            await User.findOneAndUpdate(
                { username: user.username },
                { last_login_date: new Date().toLocaleDateString() }
            );

            return response.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    last_login_date: user.last_login_date,
                    status: user.status
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