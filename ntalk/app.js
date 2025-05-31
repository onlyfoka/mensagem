var express = require('express')
 , load = require('express-load')
  , app = express();

var routes = require('./routes/home')

load('models')
   .then('controllers')
   .then('routes')
   .into(app);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get("/i","sobre.html")
//app.get('/usuarios', routes.unsubscribe.index);

app.listen(3000, function(){
  console.log("Ntalk no ar.");
});                                            