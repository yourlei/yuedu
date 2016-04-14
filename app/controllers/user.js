var User = require('../models/user');

// signup
exports.getSignup = function (req, res) {
	res.render('signup', {
		title: '注册'
	});
};
// signin
exports.getSignin = function (req, res) {
	res.render('signin', {
		title: '登录'
	});
};

// 用户列表页
exports.userList = function(req, res) {
	User.fetch(function(err, users){
		if(err)
		{
			console.log(err);
		}
		// console.log(movies.n);
		res.render('userlist', {
			'title': '用户列表页',
			users: users
		});
	});
};
exports.userRequire = function(req, res, next) {
	 var user = req.session.user;

	 if(!user) {
	 	res.redirect('/signin');
	 }
	 next();
};
exports.adminRequire = function(req, res, next) {
	var user = req.session.user;

  if(user.role <= 10) {
 	 res.redirect('/signin');
  }
  next();
};
// signup 提交用户注册数据
exports.signup = function(req, res) {
	var _user = req.body.user;
	// 其他获取参数的方法
	// req.query('user')
	// req.params('user')

	User.findOne({name: _user.name}, function(err, user) {
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
	});
};
// signin 登录页面
exports.signin = function(req, res) {
	var _user = req.body.user;
	var name = _user.name;
	var password = _user.password;

	User.findOne({name: name}, function(err, user) {
		if(err)
		{
			console.log(err);
		}
		if(!user) {
			// 用户不存在
			console.log('用户不存在．');
			return res.redirect('/signin');
		}
		user.comparePassword(password, function(err, isMatch) {
			if(err) {
				console.log(err);
			}
			if(isMatch) {
				// console.log('登录成功．');
				req.session.user = user;
				return res.redirect('/');
			}
			if(!isMatch) {
				console.log('密码不正确.');
				return res.redirect('/signin');
			}
		});
	});
};
// 登出页面
exports.logout = function(req, res) {
	delete req.session.user;
	//delete app.locals.user;

	return res.redirect('/');
	/*res.render('index', {
		title: '悦读',
		articles: [{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		}]
	});*/
};
exports.userHome = function(req, res) {
	res.render('userHome',{
		'title': 'my home'
	});
};