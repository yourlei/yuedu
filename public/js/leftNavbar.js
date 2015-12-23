$(document).ready(function() {
	var leftNavbar  = $(".yue-left-fixed"),
			mainContent = $(".yue-main-content"),
			flag = true;

	$(".wrap-icon").click(function() {
		if(flag) {
			flag = !flag;
			leftNavbar.animate({
				 left: "-210px"
			});
			mainContent.animate({
				marginLeft: "0px"
			});
		}
		else {
			flag = !flag;
			leftNavbar.animate({
				 left: "0px"
			});
			mainContent.animate({
				marginLeft: "210px"
			});	
		}	
	});
});