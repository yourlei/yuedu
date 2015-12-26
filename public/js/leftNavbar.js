$(document).ready(function() {
	var leftNavbar  = $(".yue-left-fixed"),
			mainContent = $(".yue-main-content"),
			flag;

	/* 单击　wrap-icon　隐藏或显示　left navbar */
	$(".wrap-icon").click(function() {
		flag = leftNavbar.css("display");
		
		if(flag == "none") {
			leftNavbar.animate({
				left: "0px"
			}).show("linear");
			mainContent.animate({
				marginLeft: "210px"
			});
		}
		else {
			leftNavbar.animate({
				left: "-250px"
			}).hide("fast");
			mainContent.animate({
				marginLeft: "0px"
			});	
		}	
		/* 单击左箭头隐藏left navbar */
		$(".chevron-left").click(function() {
			leftNavbar.animate({
				left: "-250px"
			}).hide("swing");
		});

	});
});