(function(){
  angular.module('app')
  .controller('mainCtrl', ['$scope', 'authService', mainController]);

  function mainController($scope, authService){

    $scope.getUserData = () => {
      authService.getCurrentUser()
      .then((resp) => {
        if(resp.data){
          $scope.user = resp.data;
        }
      })
      .catch((err) =>{ console.log(err) })
    }
    $scope.getUserData();
  }

})();