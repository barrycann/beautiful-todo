(function(){
  angular.module('app')
  .controller('profileCtrl', ['$scope', profileCtrl])

  function profileCtrl($scope){

    $scope.tester = "AWEsome";
  }

})()