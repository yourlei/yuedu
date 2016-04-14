var mongoose = require('mongoose'),
		ArticleSchema = require('../schemas/article'),
		Article = mongoose.model('Article', ArticleSchema);

//　导出post　module
module.exports = Article;
