var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var sass = require('node-sass');

mongoose.connect('localhost');
var personSchema = new mongoose.Schema({
  name:  String,
  age: Number
});
var Person = mongoose.model('Person', personSchema);

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(sass.middleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  debug: true
}));
app.use(express.static(path.join(__dirname, 'public')));


// Find
app.get('/api/v1/people/:id', function(req, res) {
  Person.findById(req.params.id, function(err, person) {
    res.send({ person: person });
  });
});

// Find All
app.get('/api/v1/people', function(req, res) {
  Person.find(function(err, people) {
    res.send({ person: people });
  });
});

// Update
app.put('/api/v1/people/:id', function(req, res) {
  Person.findByIdAndUpdate(req.params.id, req.body.person, function(err, person) {
    res.send({ person: person });
  });
});

// Create
app.post('/api/v1/people', function(req, res) {
  var person = new Person(req.body.person);
  person.save(function(err) {
    res.send({ person: person });
  });
});

// Delete
app.del('/api/v1/people/:id', function(req, res) {
  Person.findById(req.params.id).remove(function(err) {
    res.send(200);
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
