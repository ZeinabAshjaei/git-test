var ex = require('express');
var app = ex();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );

var users = [
  {id:88, name:'Zeinab'},
  {id:77, name:'Farshad'}
];

app.get('/', function(req,res){
  res.send('Welcome');
});

app.get('/users', function(req,res){

  var name = req.query.name;
  var filteredUsers = users.filter(function(user){
    return user.name === name;
  });

  res.send(JSON.stringify(filteredUsers));
});

app.get('/users/:id', function(req,res){
  var id = req.params.id;
  var user = users.filter(function(user){
    return user.id == id;
  });
  if(user.length){
    res.status(200).send(JSON.stringify(user[0]));
  } else {
    res.status(404).send(new Error('the user with id ' + id + ' is not found').toString());
  }
});

app.post('/users', function(req,res){
  var user = req.body;
  users.push(user);
  res.status(200).send(JSON.stringify(user));
});

app.listen(8080, function(){
  console.log('app is listening on port 8080!');
});
