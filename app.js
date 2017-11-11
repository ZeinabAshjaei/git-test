var ex = require('express');
var app = ex();

var users = [
  {id:88, name:'Zeinab'},
  {id:77, name:'Farshad'}
];

app.get('/', function(req,res){
  res.send('Welcome');
});

app.listen(8080, function(){
  console.log('app is listening on port 8080!');
});
