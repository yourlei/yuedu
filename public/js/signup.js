/*
 * login.js
 * code by leiyu
 * 28-12-2015
*/
function valid() {
	var email    = $("input[type='email']"),
			user     = $("input[type='text']"),
			password = $("input[type='password']");
	$('.form-warm').remove();
	var emailInput = email.val(),
		  emailChar	 = emailInput.indexOf('@'),
		  emailDot   = emailInput.indexOf('.');
		  
	if (!email.val()) {
		email.after('<span class="form-warm">请输入邮箱地址</span>');
		return false;
	}
	else if((emailChar == -1 || emailDot == -1))
	{
		email.after('<span class="form-warm">请输入正确的邮箱地址</span>');
		return false;
	}
	if(!user.val())
	{
		user.after('<span class="form-warm">请输入用户名</span>');
		return false;
	}
	if(!password.val() || password.val().length < 6)
	{
		password.after('<span class="form-warm">请输入长度为6-16的密码</span>');
		return false;
	}

	return true;
}
$('input').focus(function() {
	$(this).next().remove();
});  