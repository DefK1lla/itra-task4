const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const corsMiddleware = require('./middlewares/cors.middleware');
const authRouter = require('./routes/auth.routes');
const usersRouter = require('./routes/users.routes');

const PORT = config.get('serverPort');
const DB_URL = config.get('dbURL');

const app = express();

app.use(corsMiddleware);
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