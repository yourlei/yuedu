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
        // $(".header").animate({position: "fixed", top: "-64px"});
      }
      else {
      	$(".header").slideDown();
         // $(".header").animate({position: "fixed", top: "0px"});
      }

      // console.log(delta)
    });
	}
	scroll();

  // comment button evetn
  var flag = 1;
  $(".add-comment").on('click', function(e) {
    var hideArea = $('.hide-area');

    hideArea.toggle('slow');
    // alert(hideArea.css('display'))
    if(flag)
    {
      $('.add-comment').css({marginTop: "-28px"});
      flag = 0;
    }
    else
    {
      $('.add-comment').css({marginTop: "0"});
      flag = 1;
    }
    // $('.add-comment').css({marginTop: "-28px"})
  });
});