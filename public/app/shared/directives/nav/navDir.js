(function(){
  angular.module('app')
  .directive('navDir', function(){
    return {
      restrict: 'E',
      templateUrl: './app/shared/directives/nav/navTmpl.html',
      controller: 'navCtrl'
    }
  })
})();