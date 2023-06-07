const express = require("express");
const router = express.Router();

const isloggedIn = true;

module.exports = router;

router.get("/", (req, res) => {
    if (!isloggedIn) {
        res.redirect('/login');
    } else {
        res.render("dashboard");
    }
});