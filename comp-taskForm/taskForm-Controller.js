(function(){
    angular.module('app').controller("taskFormController", function(DataFactory){
        var td = this;
        td.list = DataFactory.getData() || [];
        td.addToDo = function(){
            if (!td.newToDo){
                return;
            }
            td.list.push(td.newToDo);
            DataFactory.setData(td.list); 
            td.newToDo = '';
        } 






    });

})();