var mongoose = require('mongoose'),
		ArticleSchema = require('../schemas/article'),
		Article = mongoose.model('Article', ArticleSchema);

//　导出article　module
module.exports = Article;
