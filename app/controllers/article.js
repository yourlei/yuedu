var Article = require('../models/article');
var Comment = require('../models/comment');
var User = require('../models/user');

// editArticle
exports.editArticle = function (req, res) {
	res.render('writeArticle', {
		title: '写文章'
	});
};

// public article
exports.postArticle = function(req, res) {
	var _article = req.body.article;

  User.update({_id: _article.author}, {$inc: {writeCount: 1}}, function(err) {
   if (err) {
     console.log(err);
   }
  });

	var new_article = new Article(_article);

	new_article.save(function(err, article) {
		if (err) {
			console.log(err);
		}
		res.redirect('/');
	});
};
exports.detail = function (req, res) {
	var id = req.params.id;

	Article.update({_id: id}, {$inc: {pv: 1}}, function(err) {
	   if (err) {
	     console.log(err);
	   }
	 });

	Article.findById(id, function(err, article) {
		if (err) {
			console.log(err);
		}
		var articleId = article.author;

		User.findById(articleId, function(err, user) {
			Comment
						.find({article: id})
						.populate('from', 'name avatar')
						.populate('reply.from reply.to', 'name avatar')
						.exec(function(err, comments) {
							console.log(comments);
							res.render('post', {
								title: article.title,
								author: user,
								// writeCount: writeCount,
								article: article,
								comments: comments
							});
						});
		});
	});
};
