const passport = require('passport'),
      Auth0Strategy = require('passport-auth0');

const app = require('./../index.js');
const db = app.get('db');

const config = require('./../config.js');

// Passport and Auth0Strategy
passport.use(new Auth0Strategy(config.AUTH_CONFIG, (accessToken, refreshToken, extraParams, profile, done) => {
    db.get_user_by_authid([profile.id], (err, user) => {
      user = user[0];
      if(err){ return done(err) }
      else if(!user){
        db.create_user_by_auth([profile.displayName, profile.id], function(err, user){
          if(err){ return done(err) };
          return done(null, user[0]);
        }) 
      } else {
        return done(null, user);
      }
    })
  }
));

// Put the User on Session
passport.serializeUser(function(user, done){
  done(null, user);
})

passport.deserializeUser(function(user, done){
  done(null, user);
})

module.exports = passport;