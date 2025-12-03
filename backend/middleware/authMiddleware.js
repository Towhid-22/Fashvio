function authMiddleware(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
}

module.exports = authMiddleware;
