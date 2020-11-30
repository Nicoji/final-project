const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken'); 

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash, 
        role: req.body.role,
        favorites: [], 
        orders_id: []
      });
      user.save()
        .then(() => res.status(201).json())
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.signIn = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'User not found !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Wrong password !' });
          }
          const char = '0123456789abdcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
          let randomString = '';
          for(i = 0; i < 20; i++) {
              randomString += char[Math.floor((Math.random() * char.length))]
          }
          res.status(200).json({
            token: jsonWebToken.sign(
                {userId: user._id}, 
                randomString,
                {expiresIn: '6h'}
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};