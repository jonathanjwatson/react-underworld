const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            playerName: 'Merlin'
        }
    ])
});



module.exports = router;