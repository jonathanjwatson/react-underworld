const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            playerName: 'Merlin',
            playerRank: 'Wizard',
            playerHitPoints: '100',
            wins: '3'
        },
        {
            playerName: 'Percival',
            playerRank: 'Knight',
            playerHitPoints: '200',
            wins: '2'
        },
        {
            playerName: 'Morgana',
            playerRank: 'Witch',
            playerHitPoints: '150',
            wins: '2'
        },
        {
            playerName: 'Oberon',
            playerRank: 'Imp',
            playerHitPoints: '65',
            wins: '1'
        },
        {
            playerName: 'Lancelot',
            playerRank: 'Knight',
            playerHitPoints: '190',
            wins: '4'
        },
        {
            playerName: 'Modred',
            playerRank: 'Demon',
            playerHitPoints: '660',
            wins: '5'
        }
    ])
});



module.exports = router;