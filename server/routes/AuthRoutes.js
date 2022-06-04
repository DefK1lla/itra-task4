const Router = require('express');
const AuthController = require('../controllers/AuthController');
const authMiddleware = require('../middlewares/AuthMiddleware');

const router = new Router();

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);
router.get('/auth', authMiddleware, AuthController.authentication);

module.exports = router;