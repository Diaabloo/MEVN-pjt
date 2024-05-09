const express = require('express');
const {
  signupValidator,
  loginValidator
} = require('../utils/validators/authValidator');

const {
  signup,
  login,
} = require('../services/authService');

const{protectAuth,changeAuthPassword,getChangeAuthPassword,restChangeAuthPassword} = require('../services/authService')

const router = express.Router();

router.post('/signup', signupValidator, signup);
router.post('/login', loginValidator, login);
router.get('/protect', protectAuth);
// router.post('/forgot', changeAuthPassword);

// router.get('/forgot/:userId/:token',getChangeAuthPassword)
// router.post('/RestPassword',restChangeAuthPassword)




module.exports = router;
