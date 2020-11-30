const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRoute = require('./routes/usersRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Password1@cluster0.djnze.mongodb.net/greenMarket?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log('Connexion à MongoDB échouée : ' + error));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/auth', usersRoute);

module.exports = app;
