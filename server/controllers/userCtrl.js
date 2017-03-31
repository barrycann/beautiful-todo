const app = require('./../index.js');
const db = app.get('db');

module.exports = {

  createUser: (req, res, next) => {
    db.create_user([
      req.body.username,
      req.body.email
    ], (err, results) =>{
      if(err){
        console.error(err);
        return res.send(err);
      }
      res.status(200).send(results);
    })
  },

  getUser: (req, res, next) => {
    db.get_user([req.params.userid], (err, results) => {
      if(err){
        console.error(err)
        return res.send(err)
      }
      res.status(200).send(results);
    })
  },

  deleteUser: (req, res, next) => {
    db.delete_user([req.params.userid], (err, results) => {
      if(err){
        console.error(err);
        return res.send(err);
      }
      res.status(200).send(results);
    })
  },

  me: (req, res, next) => {
    if(!req.session.passport){
      res.send('Current user not defined');
    } else {
      console.log('User Found!');
      res.status(200).json(req.user);
    }
  }

  
}