const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

server.use(bodyParser.json({}));
server.use(
  cors({
    origin: "*",
  })
);

server.get("/", (req, res) => {
  res.send("hello world");
});

server.post("/set", (req, res) => {
  try {
    fs.writeFileSync("./data.json", JSON.stringify(req.body));
    res.send({ success: true });
  } catch (err) {
    res.send({ success: false });
  }
  return;
});

server.get("/get", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./data.json"));
    res.json(data);
  } catch (error) {
    res.send({ success: true });
  }
  return;
});

server.listen(3009);
