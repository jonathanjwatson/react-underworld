require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const playerController = require('./controllers/playerController');

app.use(bodyParser.json());

app.get('/api/authorization', async(req, res) => {
  let token = ''
  console.log(req.headers);
  if(req.headers.authorization){
    token = jwt.verify(req.headers.authorization, 'myJWTSecretString');
  }
  if(token.name == "Necromancer" && token.password == "password1234"){
    res.json("You did it! You found the necromancer's secret password. You're authorized to leave");
  }
  else{
    res.status(401).send("You're not authorized to leave this dungeon!");
  }
});

app.use('/api/playerstats', playerController);

app.use(express.static(__dirname + '/client/build/'));
app.get('*', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
});