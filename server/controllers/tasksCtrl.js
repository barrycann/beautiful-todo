const app = require('./../index.js')
const db = app.get('db');

module.exports = {
  createTask: function(req, res, next){
    db.create_task([
      req.body.title,
      req.body.description,
      req.body.progress,
      req.body.userid
    ], function(err, results){
      if(err){
        console.error(err);
        return res.send(err);
      }
      res.status(200).send(results);
    })
  },
  getTasksByUser: function(req, res, next){
    db.get_tasks_by_user([req.params.userid], function(err, results){
      if(err){
        console.error(err);
        return res.send(err);
      }
      res.status(200).send(results);
    })
  },
  changeTaskProgress: function(req, res, next){
    db.change_task_progress([
      req.params.taskid,
      req.params.progress
    ], function(err, results){
      if(err){
        console.error(err);
        return res.send(err);
      }
      res.status(200).send(results);
    })
  }
}