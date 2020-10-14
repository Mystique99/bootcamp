// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('users', { title: 'Vista de Usuarios' });
//     // router.post('/', function(req, res, next) {
//     // });

// })
// module.exports = router;


var express = require("express");
var router = express.Router();
var usersController = require("../controllers/users");

/* GET users listing. */
router.get("/", function(req, res, next) {
    usersController.all_users(req, res);
});

router.post("/", function(req, res, next) {
    usersController.createUser(req, res);
});

module.exports = router;