const app = require('./config/express')();

app.listen(app.get('port'), function(){
  console.log('App listening at port ' + app.get('port'));
});
