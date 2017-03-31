(function(){
  angular.module('app')
  .service('authService', ['$http', authService])

  function authService($http){

    this.logout = () => {
      return $http.get('/api/logout')
      .then((resp) => {
        return resp;
      })
    }

    this.getCurrentUser = () => {
      return $http.get('/api/me')
      .then((resp) => {
        console.log("Auth Service Resp:", resp);
        return resp;
      })
    }

  }
})()