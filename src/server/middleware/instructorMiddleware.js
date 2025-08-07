
// Middleware to check if user is an instructor
const instructorMiddleware = (req, res, next) => {
  if (req.user.role !== 'instructor' && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Only instructors can perform this action' });
  }
  next();
};

module.exports = instructorMiddleware;
