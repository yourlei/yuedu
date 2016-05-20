var User = require('../models/user');
var Article = require('../models/article');
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

  if(_user.name && _user.email && _user.password)
  {
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
				
				// 密码未加密
				new_user.save(function(err, user) {
					if (err) {
						console.log(err);
					}
					res.redirect('/signin');
				});
			}
		});
  }
  else
  {
  	res.redirect('/signup');
  }
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

	return res.redirect('/');
};
// user home
exports.userHome = function(req, res) {
	var id = req.params.id;

	User.findById(id, function (err, user) {
		Article.find({author: id}, function (err, result) {
			res.render('userHome',{
				'title': user.name,
				'user': user,
				'result': result
			});	
		});
	});
};

//delete user
exports.del = function(req, res) {
	var id = req.query.id;

	if(id)
	{
		User.remove({_id: id}, function(err, user) {
			userId = user._id;
			
			// delete article relate user
			Article.remove({author: userId}, function(err, article) {
				if(err) 
				{
					console.log(err);
					res.json({success: 0});
				}
				else
				{
					res.json({success: 1,user: user});
				}
			});
		});	
	}
}