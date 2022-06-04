const Router = require('express');
const User = require('../models/User');
const UsersController = require('../controllers/UsersController');
const authMiddleware = require('../middlewares/AuthMiddleware');

const router = new Router();

router.get('/all', authMiddleware, UsersController.getAll);
router.put('/block', authMiddleware, UsersController.blockById);
router.put('/unblock', authMiddleware, UsersController.unblockById);
router.delete('/delete', authMiddleware, UsersController.deleteById);

module.exports = router;