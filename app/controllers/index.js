var Article = require('../models/article');

// index 首页
exports.index = function (req, res) {
	console.log(req.session.user);
	/*Article.fetch(function(err, articles) {
		if (err) {
			console.log(err);
		}
		console.log(articles);
		res.render('index', {
			articles: articles
		});
	});*/
	if (req.session.user) {
		var userId = req.session.user._id,
			  writeCount;		
		Article.find({author: userId}, function(err, result) {
			writeCount = result.length;
		})
	}
	Article.find({})
				 .populate('author', 'name avatar')
				 .exec(function(err, articles) {
				 		//console.log('author name :' + articles);
						res.render('index', {
							articles: articles,
							writeCount: writeCount
						});
					});
};
// search
exports.search = function (req, res) {
	var q = req.query.q;

	//console.log(q);
	Article.find({title: new RegExp(q + '.*', 'i')})
				 .populate('author', 'name')
				 .exec(function(err, results) {
				 		if(err)
				 		{
				 			console.log(err);
				 		}
						res.render('result', {
							title: 'search results',
							articles: results
						});
				 });
};
// exports.result = function (req, res) {
// 	res.render('result', {
// 		title: 'search result'
// 	})
// }