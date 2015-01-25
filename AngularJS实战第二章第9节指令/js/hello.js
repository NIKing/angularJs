var myModule = angular.module("MyModule",[]);

myModule.directive('hello',function(){
	return{
		restrict:'AEMC',  // 匹配模式 A:属性 E：元素 M:注释 C:Class
		template:'<div>hello world</div>',
		replace:true
	}
})