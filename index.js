var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();

var siblings = [
  {
    name: "Jaehyuk",
    cohort: "Winter 17"
  }
];

app.get('/siblings', function(request, response) {
  response.json(siblings);
});

app.post('/siblings', jsonParser, function(request, response) {
  var name = request.body.name;
  var cohort = request.body.cohort;

  siblings.push({
    name: name,
    cohort: cohort
  });

  response.sendStatus(201);
});

// app.put -- update
// app.delete -- delete

app.listen(1337);
console.log("Listening on port 1337");
