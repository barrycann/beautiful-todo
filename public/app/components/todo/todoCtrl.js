(function(){
  angular.module('app')
  .controller('todoCtrl', ['$scope', 'taskService', todoCtrl])

  function todoCtrl($scope, taskService){

    $scope.getUserTasks = () => {
      taskService.getUserTasks($scope.user.userid)
      .then((resp) => {
        $scope.todoTasks = resp.todo;
        $scope.inProgressTasks = resp.prog;
        $scope.completedTasks = resp.done;
      })
    }
    $scope.getUserTasks()

    $scope.createTask = (title, desc) => {
      let newTask = {
        title: title,
        description: desc,
        progress: 1,
        userid: $scope.user.userid
      }
      taskService.createTask(newTask)
      .then((resp) => {
        $scope.newTaskTitle = "";
        $scope.newTaskDesc = "";
        $scope.getUserTasks();
        return resp;
      })
      .catch((err) => {
        console.error(err);
      })
    }

    $scope.moveTask = (taskId, progress) => {
      console.log(taskId, progress);
      taskService.moveTask(taskId, progress)
      .then((resp) => {
        $scope.getUserTasks();
        return resp;
      })
    }

    $scope.deleteTask = (taskId) => {
      taskService.deleteTask(taskId)
      .then((resp) => {
        $scope.getUserTasks();
        return resp;
      })
    }
    
  }

})()