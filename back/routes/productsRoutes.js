const express = require('express');
const route = express.Router();
const productsController = require('../controllers/productsController');

route.get('/', productsController.getProducts);
route.get('/note/:id', productsController.getOneProduct);
route.post('/', productsController.addProduct);
// route.put('/note/:id', productsController.updatePostit);
// route.delete('/note/:id', productsController.deletePostit);

module.exports = route;