(function(){
  angular.module('app')
  .service('taskService', ['$http', taskService])

  function taskService($http){

    this.createTask = (data) => {
      return $http.post('/api/tasks', data)
      .then((resp) => {
        return resp;
      })
    }

    this.getUserTasks = (id) => {
      return $http.get(`/api/tasks/${id}`)
      .then((resp) => {

        let todoArr = [],
            inProgressArr = [],
            completedArr = [];

        let tasks = resp.data;
        for(var i of tasks){
          if(i.progress == 1){
            todoArr.push(i);
          }
          if(i.progress == 2){
            inProgressArr.push(i);
          }
          if(i.progress == 3){
            completedArr.push(i)
          }
        }

        let allArrays = {
          todo: todoArr,
          prog: inProgressArr,
          done: completedArr
        }

        console.log(allArrays);

        return allArrays;
      })
    }

    this.getCurrentUser = () => {
      return $http.get('/api/me')
      .then((resp) => {
        return resp;
      })
    }

    this.moveTask = (taskid, progress) => {
      return $http.put(`/api/tasks/${taskid}/${progress}`)
      .then((resp) => {
        return resp;
      })
    }

    this.deleteTask = (taskid) => {
      return $http.delete(`/api/tasks/${taskid}`)
      .then((resp) => {
        return resp;
      })
    }

  }
})()