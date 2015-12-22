var express = require('express'),
		port = process.env.PORT || 3000,
		path =  require('path'),
		app = express();

// 设置视图文件夹，渲染引擎
app.set('views', './app/views/pages');
app.set('view engine', 'jade');


app.use(express.static(path.join(__dirname,'public')));

// 设置路由
// 路由中render响应的文件（index, detail, list, admin）都是相对于views文件夹下的文件
// 首页
app.get('/', function (req, res) {
	res.render('index', {
		title: '悦读'
	})
});

// ---------------------------------
//             注册页
// ---------------------------------
app.get('/signup', function (req, res) {
	res.render('signup', {
		title: '注册'
	});
});

// ----------------------------------
//              登录页
// ----------------------------------
app.get('/login', function (req, res) {
	res.render('login', {
		title: '登录'
	});
});

// ----------------------------------

// 详情页
app.get('/detail', function (req, res) {
	res.render('detail', {
		title: 'detail page'
	});
});

// 列表页
app.get('/list', function (req, res) {
	res.render('list', {
		title: 'list page'
	});
});

// 后台页
app.get('/admin', function (req, res) {
	res.render('admin', {
		title: 'admin page'
	});
});

app.listen(port, function() {
	console.log('server runing on 3000 port.')
});