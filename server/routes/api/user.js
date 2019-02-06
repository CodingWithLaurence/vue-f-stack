const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/UserController')

router.post('/create', UserController.create)
router.post('/login', UserController.login)
router.get('/verify/:id', UserController.verify)

module.exports = router