const { validation } = require('../../midlwear/validation');
const { signUpValidator, loginValidator } = require('./auth.validation');
const { login } = require('./controller/signIn');
const { signUp } = require('./controller/signUp');

const router = require('express').Router();

router.post('/signup', validation(signUpValidator), signUp)

router.post("/signin", validation(loginValidator) ,login)

module.exports = router;