require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = require("./routes/index");
const sequelize = require("./db");

const app = express();
app.use(express.json());

app.use(cors({ origin: process.env.CORS_URL }));
app.use("/api", router);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/", (req, res) => {
  res.send("server is running.");
});

const start = async () => {
  try {
    await sequelize.authenticate();
    app.listen(process.env.PORT, () =>
      console.log(`server started listening on ${process.env.PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();

module.exports = app;
