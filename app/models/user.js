var mongoose = require('mongoose'),
		UserSchema = require('../schemas/user'),
		User = mongoose.model('User', UserSchema);

//　导出user　module
module.exports = User;