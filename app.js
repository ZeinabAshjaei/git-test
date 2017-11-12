var ex = require('express');
var app = ex();

var users = [
  {id:88, name:'Zeinab'},
  {id:77, name:'Farshad'}
];

app.get('/', function(req,res){
  res.send('Welcome');
});

app.get('/users', function(req,res){
  res.send(JSON.stringify(users));
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

app.listen(8080, function(){
  console.log('app is listening on port 8080!');
});
