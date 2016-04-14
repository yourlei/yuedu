var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ArticleSchema = new mongoose.Schema({
	title: String,
	// author: {
	// 	type: ObjectId,
	// 	ref: 'User'
	// },
	// cover: String,
	content: String,
	//readed: Number,
	//star: Number,
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

//save time recorde
ArticleSchema.pre('save', function(next){
	if(this.isNew)
	{
		this.meta.createAt = this.meta.updateAt = Date.now();
	}
	else
	{
		this.meta.updateAt = Date.now();
	}
	next();
});

// add static method
ArticleSchema.static = {
	// get data
	fetch: function(cb) {
		return this.find({})
					 .sort('meta.updateAt')
				   .exec(cb);
	},
	//search record
	findById: function(id, cb){
		//console.log("find"+id);
		return this.findOne('{_id: id}')
				   .exec(cb);
	}
};

module.exports = ArticleSchema;