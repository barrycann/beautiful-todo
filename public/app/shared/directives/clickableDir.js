(function(){
  angular.module('app')
  .directive('clickableDir', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        console.log(elem);
        $(elem).on('click', function(){
          console.log("okay");
        })
      }
    }
  })
})();