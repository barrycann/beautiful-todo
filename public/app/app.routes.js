(function(){
  angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', config])
  .run(['$rootScope', '$window', scrollFix]);

  function config($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home')

    $stateProvider
    .state('home', {
      url: '/home',
      controller: 'homeCtrl',
      templateUrl: './app/components/home/home.html'
    })
    .state('todo', {
      url: '/todo',
      controller: 'todoCtrl',
      templateUrl: './app/components/todo/todo.html'
    })
  }

  function scrollFix($rootScope, $window){
    $rootScope.$on('$stateChangeSuccess', function(){
      $window.scrollTo(0, 0);
    })
  }

})();