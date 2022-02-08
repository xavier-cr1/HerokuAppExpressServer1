var express = require("express");
var app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.get("/people", (req, res, next) => {
 res.json({"Names":["Tony","Lisa","Michael","Ginger","Melody"]});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);