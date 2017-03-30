const app = require('./../index.js')
const db = app.get('db');

module.exports = {
  createTask: (req, res, next) => {
    db.create_task([
      req.body.title,
      req.body.description,
      req.body.progress,
      req.body.userid
    ], (err, results) => {
      if(err){
        console.error(err);
        return res.send(err);
      }
      res.status(200).send(results);
    })
  },
  getTasksByUser: (req, res, next) => {
    db.get_tasks_by_user([req.params.userid], (err, results) => {
      if(err){
        console.error(err);
        return res.send(err);
      }
      res.status(200).send(results);
    })
  }
}