(function(){
  angular.module('app')
  .controller('homeCtrl', ['$scope', 'authService', homeCtrl]);
  
  function homeCtrl($scope, authService){
    
    
    
    $scope.todoList = [
      {
        title: 'eat',
        description: 'Eat breakfast'
      },
      {
        title: 'play',
        description: 'Play Games'
      },
      {
        title: 'sleep',
        description: 'Sleep a long time'
      }
    ]

    $scope.inProgress = [
      {
        title: 'code',
        description: 'Code some more'
      },
      {
        title: 'learn',
        description: 'Keep on learning'
      }
    ]

    $scope.completed = [
      {
        title: 'Wake Up',
        description: 'Wake Up at 7:00am'
      }
    ]
  }
})();