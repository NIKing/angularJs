
var myModule = angular.module('MyController',[]);

myModule.controller('MyCtrl',function($scope){
	$scope.loadData = function(){
		console.log("加载数据...");
	}
})
myModule.controller('MyCtr2',function($scope){
	$scope.loadData2 = function(){
		console.log("加载数据2...");
	}
})

myModule.directive('loader',function(){
	return{
		restrict:'AE',
		link:function(scope,element,attr){
			element.bind('mouseenter',function(){
				// scope.loadData();
				// scope.$apply("loadData()");

				// 
				scope.$apply(attr.loaddatafn);
			})
		}
	}
})