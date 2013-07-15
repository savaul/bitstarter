var express = require('express');
var fs = require('fs');
var buf = new Buffer ("test buffer", "utf8");
var app = express.createServer(express.logger());
buf = fs.readFileSync("index.html", "utf8");
app.get('/', function(request, response) {
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
  console.log(buf.toString('utf8'));
});
