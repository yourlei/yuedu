--------------------------
 	express + node + mongodb
--------------------------
app.set: 用来设置环境变量，第一个参数是环境变量的name，第二个参数是值；在其他需要访问环境变量的地方，可以用app.get获取，比如上面的app.get('env')

如：
app.set('port', process.env.PORT || 3000);　//设置服务器端口
app.set('views', __dirname + '/views');　//设置模板目录
app.set('view engine', 'jade');　//设置模板引擎