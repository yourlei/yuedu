/*
 * slideLeft.js
 * code by leiyu
 * 28-12-2015
*/
define(["jquery"], function($) {
	'use strict';
	function slideLeft(ele, opts) {
		this.opts = $.extend({}, opts);
		this.ele  = $(ele);

		this.ele.on('click', $.proxy(this._animated, this));
	}

	slideLeft.prototype._animated = function() {
		/* 取的要执行动画效果的元素　*/
		 var  target = $(this.opts.target),
		      // container　元素
					mainContent = $(".yue-main-content");

		 // 检测leftNavbar的状态
		 if(target.css('display') == 'none') {
		 	 target.animate({left: "0"}).show("swing");
		 	 mainContent.animate({marginLeft: "210px"});
		 }
		 else {
		 	 target.animate({left: this.opts.left}).hide("linear");
		 	 mainContent.animate({marginLeft: "0"});
		 }
	};
	// 封装成插件返回
  $.fn.extend({
  	slideLeft: function (opts) {
  		return this.each(function () {
  			new slideLeft(this, opts)
  		})
  	}
	});
	
	return {
		slideLeft: slideLeft
	}
});