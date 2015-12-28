/*
 * main.js
 * code by leiyu
 * 28-12-2015
*/
require.config({
	paths: {
		"jquery":     "../libs/jquery/dist/jquery.min",
		"slideLeft": "./slideLeft"

	}
});
// define main
define(["jquery", "slideLeft"], function($, slideLeft) {
	/* 左侧导航栏动画效果　*/
	$(".wrap-icon").slideLeft({
		target: ".yue-left-fixed",
		left: "-250px"
	});
	/*　屏幕小于640px下，点击左侧导航栏中的左箭头隐藏侧边栏　*/
	$(".chevron-left").click(function() {
		$('.yue-left-fixed').animate({
				left: "-250px"
		}).hide("swing");
	});
});