const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.get('/profile', auth, userController.getProfile);

module.exports = router;
