$(document).ready(function() {
 	var mditor = new Mditor("#editor",{
    height:450,
    fixedHeight:true
	});
	mditor.openPreview();

 	/*$('.fa-mail-forward').click(function () {
 		alert(11);
 		$.ajax({
	 		url: '/write',
	 		type: 'POST',
	 		data: {title: 'i kown i can fly', content: 'i kown i can fly'},
	 		dataType: 'json',
	 		error: function () { alert('error'); },
	 		success: function(data) { alert('ok'); }
	 	})();
 	});*/
  $('.fa-mail-forward').append('<input type="submit" value="发布文章" />');
  $('.meta-btn').click(function() {
  	$('.fix-bar').toggle("fast");
  });
  // when window size change, left bar and meta btn auto show or hide
  $(window).resize(function() {
	  if($(window).width() > 960)
	  {
	  	$('.meta-btn').hide();
	  	$('.fix-bar').show();
	  }
	  else 
	  {
	  	$('.meta-btn').show();
	  	$('.fix-bar').hide();
	  }
  });
});