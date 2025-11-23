const signupController = async (req, res) => {
  const { name } = req.body;
  res.send(name)
  console.log(name)
};

module.exports = { signupController };
