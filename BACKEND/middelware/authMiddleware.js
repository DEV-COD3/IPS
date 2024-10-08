const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/jwtConfig');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization ? authorization.split(' ')[1] : null;

  if (!token) {
    return res.status(403).json({ message: 'No token provided.' });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    req.userId = decoded.id; // Guardar el ID del usuario en la solicitud
    next(); // Llamar al siguiente middleware
  });
};

module.exports = { verifyToken };
