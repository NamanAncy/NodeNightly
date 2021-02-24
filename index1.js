var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

app.listen(80, "localhost", function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.get("/hello", function (req, res, next) {
  return res.status(200).json({
    abc: 11,
  });
});
