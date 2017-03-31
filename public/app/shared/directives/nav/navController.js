(function(){
  angular.module('app')
  .controller('navCtrl', ['$scope', 'authService', '$state', navController]);

  function navController($scope, authService, $state){
    
    $scope.logout = () => {
      authService.logout()
      .then((resp) => {
        console.log("Logout response: ", resp);
        delete $scope.user;
        $state.go('home', {}, {reload: true});
      })
    }
  }

})();