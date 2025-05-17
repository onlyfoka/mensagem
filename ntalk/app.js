var express = require ('express')
var routes = require ('./routes')
 var app = express ();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app get('/', routes.index);
app.get('/usuarios', routes.unsubscribe.index);

app.listen(3000, function(){
  console.log("Ntalk no ar.");
});                                            