const Router = require('express');
const User = require('../models/User');
const UsersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

router.get('/all', authMiddleware, UsersController.getAll);
router.put('/block', authMiddleware, UsersController.update);
router.delete('/delete', UsersController.delete);

module.exports = router;