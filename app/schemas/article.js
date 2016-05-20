var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ArticleSchema = new Schema({
	author: {
		type: ObjectId, 
		ref: 'User'
	},
	commentCount:  {
		type: Number, 
		default: 0
	},
	title: String,
	content: String,
	html: String,
	pv: {
		type: Number,
		default: 0
	},
	tag: String,
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
ArticleSchema.statics = {
	// get data
	fetch: function(cb) {
		return this.find({})
					 .sort('meta.updateAt')
				   .exec(cb);
	},
	findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb);
	}
};

module.exports = ArticleSchema;