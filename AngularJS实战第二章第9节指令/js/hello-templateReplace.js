var myModule = angular.module('MyModule',[]);

// directive指令
myModule.directive('hello',function(){
	return{
		restrict:'AE',
		transclude:true,
		template:'<div>hello everyone <div ng-transclude></div></div>',
	}
})