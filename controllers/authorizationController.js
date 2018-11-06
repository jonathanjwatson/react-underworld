const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get("/", (req, res) => {
    let token = ''
    // console.log(req.headers);
    if(req.headers.authorization){
      token = jwt.verify(req.headers.authorization, 'myJWTSecretString', function(err, decoded) {
        console.log(decoded);
        if(err){
          res.status(401).send("You're not authorized to leave this dungeon!");
        }
        else{
          if(decoded.name == "Necromancer" && decoded.password == "password1234"){
            res.json("You did it! You found the necromancer's secret password. You're authorized to leave");
          }
          else{
            res.status(401).send("You're not authorized to leave this dungeon!");
          }
        }
      });
    }
});



module.exports = router;