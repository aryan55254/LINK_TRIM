const express = require("express");
const router = express.Router();
const { shortenURL, redirectURL } = require("../controllers/urlcontrollers");

//short the url
router.post("/shorten", shortenURL);
//redirection
router.get("/:shorturl", redirectURL);
module.exports = router;