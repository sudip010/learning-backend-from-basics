const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message:"All users"
    });
});

router.get("/:name", (req, res) => {
    res.json({
        user: req.params.name
    });
});

router.post("/", (req, res) => {
    res.json({
        status: "user created",
        data: req.body
    });
});

module.exports = router;