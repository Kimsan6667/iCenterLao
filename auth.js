// import ....
const express = require('express')
const { register, login } = require('../controlers/auth')
const router = express.Router()


router.get('/register', register)
router.get('/login', login)
router.get('/current-user', login)
router.get('/login', login)


module.exports = router