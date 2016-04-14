var Article = require('../models/article');

// editArticle
exports.editArticle = function (req, res) {
	res.render('writeArticle', {
		title: '写文章'
	});
};

// signup 提交用户注册数据
exports.postArticle = function(req, res) {
	var _article = req.body.article;

	console.log(_article);

	var new_article = new Article(_article);

	new_article.save(function(err, article) {
		if (err) {
			console.log(err);
		}
		// console.log(user);
		res.redirect('/');
	});

	// res.redirect('/');
	// 其他获取参数的方法
	// req.query('user')
	// req.params('user')

	/*User.findOne({name: _user.name}, function(err, user) {
		if(err)
		{
			console.log(err);
		}
		// user 已存在
		if(user) {
			console.log('该用户已注册．');
			res.redirect('/signup');
		}
		else {
			var new_user = new User(_user);
			
			// console.log(user);
			// 密码未加密

			new_user.save(function(err, user) {
				if (err) {
					console.log(err);
				}
				// console.log(user);
				res.redirect('/signin');
			});
		}
	});*/
};