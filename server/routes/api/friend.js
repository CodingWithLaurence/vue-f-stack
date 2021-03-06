const express = require('express')
const router = express.Router()
const FriendController = require('../../controllers/FriendController')

router.post('/add', FriendController.sendFriendRequest)
router.post('/accept', FriendController.acceptFriendRequest)
router.get('/requests/:id', FriendController.getFriendRequests)
router.get('/:id', FriendController.getUsersFriends)
router.delete('/remove/:to/:from', FriendController.removeFriend)

module.exports = router