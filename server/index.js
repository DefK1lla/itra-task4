const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const authRouter = require('./routes/AuthRoutes');
const usersRouter = require('./routes/UsersRoutes');

const PORT = process.env.PORT || config.get('serverPort');
const DB_URL = config.get('dbURL');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

const start = async () => {
    try {
        await mongoose.connect(DB_URL);

        app.listen(PORT, () => {
            console.log('Server started', PORT);
        });

    } catch (e) {
        console.log(e)
    }
}

start();