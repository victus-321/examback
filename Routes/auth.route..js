const {Router} = require("express");
const {register} = require("../controllers/auth.controller");

const route = Router();

Router.post("/auth/register", register);

module.exports = router;