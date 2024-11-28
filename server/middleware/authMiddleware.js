const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const token = req.header("Authorization");

  console.log('Authorization header:', token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    // attach user data to request
    req.user = decoded;
    // proceed to next middleware or route handler
    next();
  } catch (err) {
    console.error('jwt error:', err);
    return res.status(400).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleWare;
