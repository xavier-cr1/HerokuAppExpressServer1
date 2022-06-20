var express = require("express");
var app = express();

app.get("/people", (req, res, next) => {
  res.json({ Names: ["Tony", "Lisa", "Michael", "Ginger", "Melodyd,Johnny"] });
});

app.listen(process.env.PORT || 8080);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
