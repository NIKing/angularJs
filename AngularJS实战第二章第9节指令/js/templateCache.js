
var myModule = angular.module('MyModule',[]);

// 注射器加载所有模块时，此方法执行一次,缓存模板
myModule.run(function($templateCache){
	// console.log("323"); html文件是虚拟的，可以任意起名字
	$templateCache.put('hellos.html',"<div>hello everyone..</div>")
})
myModule.directive('hello',function($templateCache){
	return{
		restrict:'AECM',
		template:$templateCache.get('hellos.html'),
		replace:true
	}
})


myModule.directive('everyone',function($templateCache){
	return{
		restrict:'AECM',
		template:$templateCache.get('hellos.html'),
		replace:true
	}
})