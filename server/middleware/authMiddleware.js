const jwt = require('jsonwebtoken');

const middleWare = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided'});

    }

    try {
        const decoded = jwt.verify(token.split("")[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }
}

module.exports = authMiddleWare;