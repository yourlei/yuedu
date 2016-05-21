var Article = require('../models/article');

// index 首页
exports.index = function (req, res) {
	if (req.session.user) {
		var userId = req.session.user._id,
			  writeCount;		
		Article.find({author: userId}, function(err, result) {
			writeCount = result.length;
		})
	}
	Article.find({})
	       .sort({_id: -1})
				 .populate('author', 'name avatar')
				 .exec(function(err, articles) {
						res.render('index', {
							articles: articles,
							writeCount: writeCount
						});
					});
};
// life tag
exports.life = function (req, res) {
	if (req.session.user) {
		var userId = req.session.user._id,
			  writeCount;		
		Article.find({author: userId}, function(err, result) {
			writeCount = result.length;
		})
	}
	Article.find({tag: 'life'})
       .sort({_id: -1})
			 .populate('author', 'name avatar')
			 .exec(function(err, articles) {
					res.render('index', {
						articles: articles,
						writeCount: writeCount
					});
				});
};

// hot tag
exports.weekly = function (req, res) {
	if (req.session.user) {
		var userId = req.session.user._id,
			  writeCount;		
		Article.find({author: userId}, function(err, result) {
			writeCount = result.length;
		})
	}
	Article.find({'pv': {$gt: 100}})
       .sort({_id: -1})
			 .populate('author', 'name avatar')
			 .exec(function(err, articles) {
					res.render('index', {
						articles: articles,
						writeCount: writeCount
					});
				});
};

// story tag
exports.story = function (req, res) {
	if (req.session.user) {
		var userId = req.session.user._id,
			  writeCount;		
		Article.find({author: userId}, function(err, result) {
			writeCount = result.length;
		})
	}
	Article.find({tag: 'story'})
       .sort({_id: -1})
			 .populate('author', 'name avatar')
			 .exec(function(err, articles) {
					res.render('index', {
						articles: articles,
						writeCount: writeCount
					});
				});
};
// it tag
exports.it = function (req, res) {
	if (req.session.user) {
		var userId = req.session.user._id,
			  writeCount;		
		Article.find({author: userId}, function(err, result) {
			writeCount = result.length;
		})
	}
	Article.find({tag: 'it'})
       .sort({_id: -1})
			 .populate('author', 'name avatar')
			 .exec(function(err, articles) {
					res.render('index', {
						articles: articles,
						writeCount: writeCount
					});
				});
};
// search
exports.search = function (req, res) {
	var q = req.query.q;

	Article.find({title: new RegExp(q + '.*', 'i')})
				 .populate('author', 'name')
				 .exec(function(err, results) {
				 		if(err)
				 		{
				 			console.log(err);
				 		}
						res.render('result', {
							title: '悦读',
							articles: results
						});
				 });
};
