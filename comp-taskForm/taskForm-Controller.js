(function(){
    angular.module('app').controller("taskFormController", function(){
        var td = this;
        td.list = [];
        td.addToDo = function(){
            if (!td.newToDo){
                return;
            }
            td.list.push(td.newToDo);
            td.newToDo = '';
        }






    });

})();