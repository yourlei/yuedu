var Index = require('../app/controllers/index');
var UserRouter = require('../app/controllers/user');
var Article = require('../app/controllers/article');
var Comment = require('../app/controllers/comment');

module.exports = function(app) {
	app.use(function(req, res, next) {
		var _user = req.session.user;

		// 用户登录时保存user到本地
		// if (_user) {
			app.locals.user = _user;
		// }
	  next();
	});

	/* 设置路由 */
	// 路由中render响应的文件（index, detail, list, admin）都是相对于
	// views文件夹下的文件

	// 首页
	app.get('/', Index.index);
	app.get('/life', Index.life);
	app.get('/hots', Index.weekly);
	app.get('/story', Index.story);
	app.get('/it', Index.it);

	// User
	app.get('/signup', UserRouter.getSignup);
	app.get('/signin', UserRouter.getSignin);
	app.get('/admin/userlist', UserRouter.userRequire, UserRouter.adminRequire, UserRouter.userList);
  app.delete('/admin/userlist', UserRouter.userRequire, UserRouter.adminRequire, UserRouter.del);
	// 提交用户注册数据
	app.post('/signup', UserRouter.signup);
	// 登录页面
	app.post('/signin', UserRouter.signin);
	// 登出页面
	app.get('/logout', UserRouter.logout);
	// user home
	app.get('/userhome/:id', UserRouter.userHome);

	// 详情页
	app.get('/post/:id', Article.detail);

	// markdown书写写面
	app.get('/write', UserRouter.userRequire, Article.editArticle);
	app.post('/write', Article.postArticle);

	// comment
	app.post('/user/comment', UserRouter.userRequire, Comment.save);

	app.get('/results', Index.search);
};