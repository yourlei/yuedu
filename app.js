var express = require('express'),
		mongoose = require("mongoose"),
		path =  require('path'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser'),
		morgan = require('morgan'),
		session = require('express-session'),
		mongoStore = require('connect-mongo')(session),
		mditor = require("mditor"),
		port = process.env.PORT || 3000,
		app = express(),
		db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/test');

db.once('open', function() {
	console.log('mongodb succefully connect.')
});

// markdown 文本解析
var parser = mditor.Parser();
//var html = parser.parse("** Hello mditor! **");

app.locals.moment = require('moment');	

// 设置视图文件夹，渲染引擎
app.set('views', './app/views/pages');
app.set('view engine', 'jade');

// __dirname: 指当前目录
app.use(express.static(path.join(__dirname,'public')));

// 通过body-parser中间件解析url，json数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
	secret: 'yuedu',
	store: new mongoStore({
    url : 'mongodb://127.0.0.1:27017/yuedu',
    collection: 'sessions'
	}),
  	resave:false,
  	saveUninitialized:true
	})
);

// 生产环境调试配置
if ('development' === app.get('env')) {
	app.set('showStackError', true);
 	app.use(morgan('combined :method :url :status'));
	app.locals.pretty = true;
	mongoose.set('debug', true);
}
require("./config/routers")(app);

app.listen(port, function() {
	console.log('server runing on 3000 port.')
});