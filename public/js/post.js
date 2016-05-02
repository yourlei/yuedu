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
      // console.log(delta)
    });
	}
	scroll();

  // comment button evetn
  var flag = 1;
  $(".add-comment, .reply-comment").on('click', function(e) {
    var hideArea = $('.hide-area');

    hideArea.toggle('slow');
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
  });

  $('nav .avatar, .user-car').hover(function() {
    $('.user-car').show();
  }, function() {
    $('.user-car').hide();
  });

  // add reply comments
  $('.reply-comment').click(function(e) {
    var target = $(this);
    var toId = target.data('tid');
    var commentId = target.data('cid');

    // if ($('#toId').length > 0) {
    //   $('#toId').val(toId)
    // }
    // else {
      $('<input>').attr({
        type: 'hidden',
        id: 'toId',
        name: 'comment[tid]',
        value: toId
      }).appendTo('#commentForm');
    // }

    // if ($('#commentId').length > 0) {
    //   $('#commentId').val(commentId)
    // }
    // else {
      $('<input>').attr({
        type: 'hidden',
        id: 'commentId',
        name: 'comment[cid]',
        value: commentId
      }).appendTo('#commentForm');
    // }
  });

});