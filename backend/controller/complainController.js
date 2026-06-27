const complainModel = require("../model/complainModel");

const addComplainController = async (req, res) => {
  try {
    const { name, email, phone, subject, details } = req.body;
    if (!name || !email || !phone || !subject || !details) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newComplain = new complainModel({
      name,
      email,
      phone,
      subject,
      details,
    });
    await newComplain.save();
    console.log(newComplain);
    res.status(201).json({ message: "Complain added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};
module.exports = { addComplainController };
