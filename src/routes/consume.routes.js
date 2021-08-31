const { Router } = require("express");
const { consumeURL } = require("../controller/consume.controller");
const router = Router();

router.post("/", consumeURL);

module.exports = router;