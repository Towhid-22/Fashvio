function adminMiddleware(req, res, next) {
  if (req.session.user.role === "admin") {
    next();
  } else {
    return res
      .status(401)
      .json({ success: false, message: "only admin access this route" });
  }
}

module.exports = adminMiddleware;
