const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});
app.use(cors());
const cate = require("./data/categories.json");

app.get("/cate", (req, res) => {
  res.send(cate);
});

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
