var express = require('express');
var router = express.Router();
var user_controller = require ('../controllers/api/user-controller');
const passport = require('passport');
router.use(passport.initialize());


router.get('/list-account-user', user_controller.get_list_account_user);

module.exports = router;