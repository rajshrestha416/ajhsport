const router = require('express').Router();

router.use('/contact', require('../modules/contact/contact.route'));
router.use('/user', require('../modules/user/user.route'));
router.use('/event', require('../modules/event/event.route'))
router.use('/blog', require('../modules/blog/blog.route'))
router.use('/coaching', require('../modules/coaching/coaching.route'))
router.use('/booking', require('../modules/booking/booking.route'))
router.use('/event-register', require('../modules/eventRegister/eventRegister.route'))
router.use('/online-forum', require('../modules/onlineForum/onlineForum.route'))
router.use('/notice', require('../modules/notice/notice.route'))

module.exports = router;
