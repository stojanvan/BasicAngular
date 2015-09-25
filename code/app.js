var angular;

angular.module('starterApp', []).controller('StarterController', function ($scope) {
    "use strict";
    this.bat = 3;
    $scope.animal = 'cat';
    
    
    this.mySmallObject = {a: "abc"};
  
    this.aList = [
        "a", "b", "c"
    ];

    this.taskList = [
        {task: "submit bug", selected: false},
        {task: "test cases to confluence", selected: false},
        {task: "tasks about TA VL", selected: true}
    ];
    
    this.addTask = function () {
        console.log("add task button clicked");
        this.taskList.push({task: this.aTask, selected: false});
        this.aTask = "";
    };
    
    this.countUnfinishedTasks = function () {
        var count = 0;
        angular.forEach(this.taskList, function (task) {
            count += task.selected ? 0 : 1;
        });
        return count;
    };
    
    
    this.archive = function () {
        console.log("archiving...");
        var oldList = this.taskList;
        this.taskList = [];
        for (var i in oldList) {
            if (!oldList[i].selected) {
                this.taskList.push(oldList[i]);
            }
        }
    };
    
});
