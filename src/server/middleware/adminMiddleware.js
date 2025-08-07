
// Middleware to check if user is an admin
const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Only admins can perform this action' });
  }
  next();
};

module.exports = adminMiddleware;
