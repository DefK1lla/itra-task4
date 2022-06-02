const Router = require('express');
const User = require('../models/User');
const UsersController = require('../controllers/users.controller');

const router = new Router();

router.get('/all', UsersController.getAll);
router.put('/block', UsersController.update);
router.delete('/del', UsersController.delete);

module.exports = router;