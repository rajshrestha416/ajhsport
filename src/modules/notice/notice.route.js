const router = require('express').Router();
const controller = require('./notice.controller.js');
const { verifyUser } = require('../../middleware/auth');

router.get('/', verifyUser, controller.getNotice);

module.exports = router; 