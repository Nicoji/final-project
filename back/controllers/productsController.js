const Product = require('../models/productsModel');

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({error}));
};

exports.getOneProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.status(200).json(product))
        .catch(error => res.status(400).json({error}));
};

exports.addProduct = (req, res, next) => {
    const product = new Product({
        ...req.body
    });
    product.save()
    .then(() => res.status(201).json())
    .catch(error => res.status(400).json({ error }));
};

// exports.updatePostit = (req, res, next) => {
//     Postit.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
//         .then(() => res.status(200).json())
//         .catch(error => res.status(400).json({ error }));
// };

// exports.deletePostit = (req, res, next) => {
//     Postit.deleteOne({_id: req.params.id})
//         .then(() => res.status(200).json())
//         .catch(error => res.status(400).json({ error }));
// };