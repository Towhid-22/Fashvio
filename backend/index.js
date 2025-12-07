const express = require("express");
const router = require("./router");
const connectDB = require("./config/database");
const app = express();
require("dotenv").config();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const PORT = process.env.PORT || 4000;

app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    secret: process.env.sessionsecret,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
    name: "fashvio",
  })
);
connectDB();

app.use(express.json());
app.use(express.static("uploads"));
app.use(router);

// localhost:3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
