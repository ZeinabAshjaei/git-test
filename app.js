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

  res.send(Object.keys(req.body).length === 0 ? JSON.stringify(users) : JSON.stringify(filteredUsers));
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
  var myUser = req.body;
  users.push(user);
  res.status(200).send(JSON.stringify(user));
});

app.delete('/users/:id', function(req,res){
  var id = parseInt(req.params.id);
  users = users.filter(function(user){
    console.log(user);
    return user.id !== id;
  });

  res.status(202).send();
  
});

app.put('/users/:id', function(req,res){
   var myId = parseInt(req.params.id);
   var upUserName= req.body.name;
   console.log(upUserName);

  users.forEach(function(user){
    if(user.id === myId){
      user.name = upUserName; 
    }
  });

  res.status(202).send();
  
});

app.listen(8080, function(){
  console.log('app is listening on port 8080!');
});
