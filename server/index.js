//=== Required Dependencies ======================================================
const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      massive = require('massive'),
      config = require('./config');

const dbPass= config.DB_PASS;
const port = config.PORT;
const connectionString = `postgres://postgres:${dbPass}@localhost/todo`;

//=== App Initialization with Express ============================================
const app = module.exports = express();

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());

app.use(session({
  secret: config.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

//=== Database ===================================================================
const massiveInstance = massive.connectSync({
  connectionString:connectionString,
  scripts: "server/db"
});
app.set('db', massiveInstance);
const db = app.get('db');

//=== Passport ===================================================================
const passport = require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());

//=== Passport Endpoints =========================================================
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', 
  {
    successRedirect: '/#!/todo',
    failureRedirect: '/#!/'
  }
))

var isAuthed = function(req, res, next){
  if(!req.isAuthenticated()){
    return res.status(401).send("Not Authenticated");
  }
  console.log("Authenticated")
  return next();
}

//=== Controllers ================================================================
const serverCtrl = require('./controllers/serverCtrl.js'),
      tasksCtrl = require('./controllers/tasksCtrl.js'),
      userCtrl = require('./controllers/userCtrl.js');

//=== User Endpoints =============================================================
app.post('/api/users', userCtrl.createUser);
app.get('/api/users/:id', userCtrl.getUser);
app.delete('/api/users/:id', userCtrl.deleteUser);
app.get('/api/me', userCtrl.me);

//=== Task Endpoints =============================================================
app.post('/api/tasks', tasksCtrl.createTask);
app.get('/api/tasks/:userid', tasksCtrl.getTasksByUser);
app.put('/api/tasks/:taskid/:progress', tasksCtrl.changeTaskProgress);

app.get('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    return res.status(200).send('logged out');
  })
})

//=== Listen =====================================================================
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})