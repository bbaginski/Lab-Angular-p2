(function() {
  angular.module("app")
  .component("list", {
    controller: "ListController",
    templateUrl: "comp-taskList/taskList.html",
    bindings: {
      list: "<",
      tdfliter: "<",
      remove: "<"
    }



    
  });
})();
