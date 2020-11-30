const jsonWebToken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // Récupérer le token dans le header de la requete (Il est précédé par Bearer avec un espace, d'ou le split)
        const token = req.headers.authorization(' ')[1];
        const decodedToken = jsonWebToken.verify(token, ); 
        const userId = decodedToken.userId; 
        if(req.body.userId && req.body.userId !== userId) {
            throw 'Invalid id';
        } else {
            next();
        }
    } catch {
        res.status(401).json();
    }
}