var express = require('express');
var mysql = require('mysql');
var db = require('./db');
var app = express();
module.exports.app = app;
var path = require('path');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');
app.use("/", router);

app.set("port", 3000);

app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + "/../client"));

if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));

app.get('/', function(req, res){
	res.sendFile('index.html', {root: path.join(__dirname, '../client')});
})

app.post('/', function (req, res) {
	var zip = req.body.zip;
	console.log("zip is", zip);
  var data = {};

	var client = mysql.createConnection({
    database : "scores",
    user     : 'root',
    password : ''
    });
  client.connect();

  var query = client.query("select restname, score, lat, longi from scores where zipcode = " + zip + ";", function(err, rows, fields){
    if(rows.length != 0){
      data[data] = rows;
      res.json(data);
	  }else{
      data[data] = 'No data Found..';
      res.json(data);	
  	}
	  console.log("result from server post", data);
	});
	
});

}
