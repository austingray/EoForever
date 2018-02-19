import express from 'express';
import path from 'path';
import passport from 'passport';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import flash from 'connect-flash';
import template from './template';
import App from './src/react/App';

const app = express();

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// view engine
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: process.env.EO_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

// passport
app.use(passport.initialize());
app.use(passport.session());
require('./app.auth.js')();

// define routes
const users = require('./routes/users');
// use routes
app.use('/users', users);

// use template.html on every route
app.get('*', (req, res) => {
  // get the current url
  const url = req.originalUrl.split('?')[0];
  // set the current app state
  const state = {
    url,
  };
  // send the response
  res.send(template(state, App));
});

module.exports = app;
