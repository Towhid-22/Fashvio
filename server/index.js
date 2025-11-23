const express = require("express");
const router = require("./router");
const connectDB = require("./config/database");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(router)

// localhost:3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
