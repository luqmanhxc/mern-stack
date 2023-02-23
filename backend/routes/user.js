const express = require('express');

const router = express.Router();

// controller functions
const { loginUser, signUpUser } = require('../controllers/userController');

// login route
router.post('/login', loginUser);

// sign up route
router.post('/signup', signUpUser);

module.exports = router;
