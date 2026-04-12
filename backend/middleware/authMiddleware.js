// function authMiddleware(req, res, next) {
//   if (req.session) {
//     next();
//   } else {
//     return res.status(401).json({ success: false, message: "Unauthorized" });
//   }
// }

const authMiddleware = (req, res, next) => {
  if (!req.session?.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  req.user = req.session.user;
  next();
};

module.exports = authMiddleware;