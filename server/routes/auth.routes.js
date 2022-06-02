const Router = require('express');
const AuthController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);

router.get('/auth', authMiddleware, AuthController.authentication);

module.exports = router;