const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/UsersController');
const ctrlResume = require('../controllers/ResumeController');

/* GET users listing. */
router
    .route('/users')
    .get(ctrlUsers.userList);

router
    .route('/resume')
    .get(ctrlResume.resumeList);

module.exports = router;