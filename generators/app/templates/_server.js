const app = require('./config/express')();

app.listen(app.get('port'), () => {
  console.log('App listening at port ' + app.get('port'));
});