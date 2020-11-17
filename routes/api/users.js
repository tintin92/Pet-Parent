const router = require("express").Router();
// const passport = require("passport");
const usersController = require("../../controllers/usersController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

//Changed to post route to match the request

router.route("/logout")
  .post(usersController.logout);


// Matches with "/api/users/:id"
router.route("/user")
  .get(usersController.getUser);
/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;