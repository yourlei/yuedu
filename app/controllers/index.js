// index 首页
exports.index = function (req, res) {
	console.log(req.session.user);
	res.render('index', {
		title: '悦读',
		articles: [{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		},
		{
			_id: 1,
			title: '2015-我读过的那些书',
			author: 'leiyu',
			cover: '/images/post-img-1.jpg'
		}]
	});
};