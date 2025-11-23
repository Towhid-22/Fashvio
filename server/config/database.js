const { default: mongoose } = require("mongoose");

async function connectDB() {
  const DB_URL = process.env.DATABASE_URL;
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
