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
    var win = $(window),
        beforeScrollTop = win.scrollTop();

    win.on("scroll", function() {
      var afterScrollTop = win.scrollTop(),
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
    });
	}
	scroll();
});