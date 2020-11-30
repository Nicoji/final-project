const express = require('express');
const route = express.Router();
// const postitController = require('../controllers/postitController');

route.get('/', postitController.getPostits);
route.get('/note/:id', postitController.getOnePostit);
route.post('/', postitController.addPostit);
route.put('/note/:id', postitController.updatePostit);
route.delete('/note/:id', postitController.deletePostit);

module.exports = route;