var mongoose = require('mongoose');
// var	bcrypt = require('bcrypt');
// windows下使用bcrypt-nodejs代替bcrypt
var	bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
	name: {
		unique: true,
		type: String
	},
	password: String,
	role: {
		type: Number,
		default: 0
	},
	avatar: {
		type: String,
		default:'/images/avatar.jpg',
	},
	writeCount: {
		type: Number,
		default: 0
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});
// 添加实例方法
UserSchema.pre('save', function(next) {
	var _user = this;
	var passwd = this.password;
	　
	if(this.isNew)
	{
		this.meta.createAt = this.meta.updateAt = Date.now();
	}
	else
	{
		this.meta.updateAt = Date.now();
	}
	// 对密码进行加盐，hash操作
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if (err) 
		{
			return next(err);
		}
		/*
			bcrypt.hash(passwd, salt, function(err, hash){
				if(err)
				{
					return next(err);
				}

				_user.password = hash;
				// console.log(_user.password);
				next();
			});
		*/
		bcrypt.hash(_user.password, null, null, function (err, hash){
				if (err) {
					return next(err);
				} 
				_user.password = hash;
				next();
			});
	});
});
// 用户登录时，验证密码
UserSchema.methods = {
  // _password用户登录时输入的密码
  comparePassword: function(_password, cb) {
    bcrypt.compare(_password, this.password, function(err, isMatch) {
      if (err) return cb(err);

      cb(null, isMatch);
     // console.log(isMatch);
    });
  }
};
// 静态方法
UserSchema.statics = {
  fetch: function(cb) {
    return this
      .find()
      .sort('meta.updateAt')
      .exec(cb);
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb);
  }
};
module.exports = UserSchema;
