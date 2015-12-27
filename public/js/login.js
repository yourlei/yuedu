/*login.js*/
'use strict';
$(document).ready(function() {
	var email    = $("input[name='email']"),
			user     = $("input[name='user']"),
			password = $("input[name='password']");

	$('.login-form').submit(function(e) {
		/* 移除掉所有警告*/

		var emailInput = email.val(),
			  emailChar	 = emailInput.indexOf('@'),
			  emailDot   = emailInput.indexOf('.');

		$('.form-warm').remove();

		/*　邮箱输入为空　*/
		if (!email.val()) {
			email.after('<span class="form-warm">请输入邮箱地址</span>');
			e.preventDefault();
		}
		/* 输入的邮箱格式有误　*/
		if (email.val() && (emailChar == -1 || emailDot == -1)) {
			email.after('<span class="form-warm">请输入正确的邮箱地址</span>');
			e.preventDefault();
		}

		/*　用户名输入为空　*/
		if ($.trim(user.val()) == "") {
			user.after('<span class="form-warm">请输入用户名</span>');
			e.preventDefault();
		}

		/*　密码输入为空　*/
		if (!password.val()) {
			password.after('<span class="form-warm">请输入密码</span>');
			e.preventDefault();
		}
		/* 当输入的密码长度小于６时　*/
		if (password.val() && password.val().length < 6) {
			password.after('<span class="form-warm">请输入长度为6-16的密码</span>');
			e.preventDefault();
		};

	});
	
	$('input').focus(function() {
		$(this).next().remove();
	});
});