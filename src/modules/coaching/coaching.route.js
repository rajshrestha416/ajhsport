const router = require('express').Router();
const controller = require('./coaching.controller');
const { verifyUser } = require('../../middleware/auth');

router.post('/', controller.addBlog);
router.put('/:id', controller.updateBlog);
router.get('/', controller.getAllBlogs);
router.get('/:id', controller.getBlogById);
router.delete('/:id', verifyUser, controller.deleteBlog);

module.exports = router;