 /*
 * signup.js
 * code by leiyu
 * 28-12-2015
*/
function valid() {
	var user     = $("input[type='text']"),
			password = $("input[type='password']");

	$('.form-warm').remove();

	if(!user.val())
	{
		user.after('<span class="form-warm">请输入用户名</span>');
		return false;
	}
	if(!password.val() || password.val().length < 6)
	{
		password.after('<span class="form-warm">密码不正确</span>');
		return false;
	}

	return true;
}
$('input').focus(function() {
	$(this).next().remove();
});  