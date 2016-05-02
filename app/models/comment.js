var mongoose = require('mongoose'),
		CommentSchema = require('../schemas/comment'),
		Comment = mongoose.model('Comment', CommentSchema);

//　导出post　module
module.exports = Comment;