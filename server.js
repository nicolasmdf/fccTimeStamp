var express = require('express');
var app = express();

app.use(express.static('public'));

app.route("/").get(function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.route("/api/timestamp/:date_string").get(function (req, res) {
  let stamp = !parseInt(req.params.date_string) ? req.params.date_string : parseInt(req.params.date_string);
  let date = new Date(stamp);
  res.json({ "unix": date.getTime(), "utc" : date.toUTCString() });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
