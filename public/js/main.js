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
	$(".drawer-btn").slideLeft({
		target: ".yue-left-fixed",
		left: "-250px"
	});
	/*　屏幕小于640px下，点击左侧导航栏中的左箭头隐藏侧边栏　*/
	$(".chevron-left").click(function() {
		$(".yue-main-content").css({transform: "translateX(0)"});
		$('.yue-left-fixed').css({
				transform: "translateX(-240px)"
		});
	});

	// mouseover avatar show hidden box
	$('.avatar, .user-car').hover(function() {
		// console.log(11);
		$('.user-car').show();
	}, function() {
		$('.user-car').hide();
	});
	// $('.user-car').hover(function() {
	// 	$(this).show();
	// }, function() {
	// 	$(this).hide();
	// });
});