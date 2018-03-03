(function(){
    angular.module('app').controller("ListController", function(){
        var vm = this;
        console.log('here')    
 
          vm.remove = function(index){
            vm.list.splice(index, 1);
           }

 





    });

})();