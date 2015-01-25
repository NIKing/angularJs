var helloModule = angular.module("FromModule",[]);

helloModule.directive('fromhello',function () {
	// body...
	return{
		restrict:'AECM',
		templateUrl:'tmpl/from-hello.html',
		// template:"<div>232323</div>",
		replace:true
	}
})

// var myModule = angular.module("FromModule",[]);

// myModule.directive('fromhello',function(){
// 	return{
// 		restrict:'AEMC',  // 匹配模式 A:属性 E：元素 M:注释 C:Class
// 		template:'<div>hello world</div>',
// 		replace:true
// 	}
// })