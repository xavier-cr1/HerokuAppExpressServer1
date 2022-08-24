var express = require("express");
const PeopleRepository = require("./repositories/people.repository");
const People = require('./entities/people.entity');
const cors = require('cors');

var app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors('*'));

const localPORT = process.env.PORT || 8080;
const localHOST = process.env.HOST || 'localhost';

const repo = new PeopleRepository();

app.get('/', (_, res) => res.send('ok'));

app.get("/people", (req, res) => {
  res.json(repo.list());
});

app.post('/people', (req, res) => {
  const people = new People(req.body);

  console.log('people', people);

  repo.save(people);
  res.json(people);
});

app.listen(localPORT, localHOST);
console.log(`Running on http://${localHOST}:${localPORT}`);
