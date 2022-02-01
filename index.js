var express = require("express");
var app = express();

app.get("/people", (req, res, next) => {
 res.json({"Names":["Tony","Lisa","Michael","Ginger","Melody"]});
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});