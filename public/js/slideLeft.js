/*
 * slideLeft.js
 * code by leiyu
 * 28-12-2015
*/
define(["jquery"], function($) {
	'use strict';
	function SlideLeft(ele, opts) {
		var self = this;
		self.opts = $.extend({}, opts);
		self.ele  = $(ele);

		self.ele.on('click', $.proxy(self._animated, self));
	}

	SlideLeft.prototype._animated = function() {

		 var  target = $(this.opts.target),　　　　　　　　　//　左边栏div元素
					mainContent = $(".yue-main-content"),　// container　元素
		      regRule = /matrix\(.*,\s*(\w+)\)/,　　　// 提取tansformX属性值的正则表达式
		 		  transform = target.css('transform'),　//取得属性值
		 		  result = regRule.exec(transform)[0].split(',')[4];
		 
		 // 检测leftNavbar的状态
		 if( Number.parseInt(result) < 0) {
		 	 target.css({transform: "translateX(0)"});
		 	 mainContent.css({transform: "translateX(100px)"});
		 }
		 else {
		 	 target.css({transform: "translateX(-240px)"});
		 	 mainContent.css({transform: "translateX(0)"});
		 }
	};
	// 封装成插件返回
  $.fn.extend({
  	slideLeft: function (opts) {
  		return this.each(function () {
  			new SlideLeft(this, opts);
  		});
  	}
	});
	
	return {
		slideLeft: SlideLeft
	};
});