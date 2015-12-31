/*
 * main.js by leiyu
 * 31-12-2015
 * 
*/
require.config({
	paths: {
		"jquery":     "../libs/jquery/dist/jquery.min"
	}
});
// define main
define(["jquery"], function($) {
	// scroll(function(direction) { console.log(direction) });    
	function scroll() {
    var beforeScrollTop = document.body.scrollTop;

    window.addEventListener("scroll", function() {
      var afterScrollTop = document.body.scrollTop,
          delta = afterScrollTop - beforeScrollTop;

      if( delta === 0 ){
      	return false;
      } 
      beforeScrollTop = afterScrollTop;

      if(delta > 0)
      {
      	$(".header").slideUp(); 
      }
      else {
      	$(".header").slideDown();
      }
    }, false);
	}
	scroll();
});