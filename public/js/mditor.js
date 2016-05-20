$(document).ready(function() {
 	var mditor = new Mditor("#editor",{
    height:450,
    fixedHeight:true
	});
	var life  = 'life',
			story = 'story',
			it    = 'it';
	mditor.openPreview();
 
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
  // add tags
  function addTag(ele, tag) {
  	ele.css('background-color', '#333');

  	if ($('#tag').length > 0)
    {
      // $('#tag').val(tag)
      $('#tag').remove();
      ele.css('background-color', 'cornflowerblue');
    }
    else
    {
      $('<input>').attr({
        type: 'hidden',
        id: 'tag',
        name: 'article[tag]',
        value: tag
      }).appendTo('form');
    }
  }
  $('#life').click(function() {
  	var _this = $(this);
	  addTag(_this, life); 	
  });
  $('#story').click(function() {
  	var _this = $(this);
	  addTag(_this, story); 	
  });
  $('#it').click(function() {
  	var _this = $(this);
	  addTag(_this, it); 	
  });
});