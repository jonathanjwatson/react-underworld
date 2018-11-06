require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authorizationController = require('./controllers/authorizationController');
const playerController = require('./controllers/playerController');

app.use(bodyParser.json());


app.use('/api/authorization', authorizationController);
app.use('/api/playerstats', playerController);

app.use(express.static(__dirname + '/client/build/'));
app.get('*', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
});