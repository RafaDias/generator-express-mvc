const express = require('express');
const load = require('express-load');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

module.exports = function() {
  
  const app = express();

  //Set port to env.Port or default to 8080
  app.set('port', process.env.PORT || 8080);

  //set view engine
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //middleware for security
  app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());

  // setup the logger
  app.use(morgan("short"));
  
  // to support JSON-encoded bodies
  app.use( bodyParser.json() );       
  
  // to support URL-encoded bodies
  app.use(bodyParser.urlencoded({extended: true}));
  
  app.use(cookieParser());

  //Use the public folder for static files
  app.use(express.static('./public'));

  //configure mvc
  load('models', {cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};