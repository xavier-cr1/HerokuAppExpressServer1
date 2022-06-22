var express = require("express");
var app = express();

const localPORT = 8080;
const localHOST = '0.0.0.0';

app.get("/people", (req, res, next) => {
  res.json({ Names: ["Tony", "Lisa", "Michael", "Ginger", "Melodyd,Johnny"] });
});

app.listen(process.env.PORT || 8080);
if (process.env.PORT === undefined || variable === null) {
  console.log(`Running on http://${localHOST}:${localPORT}`);
}
else
{
  console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
}

