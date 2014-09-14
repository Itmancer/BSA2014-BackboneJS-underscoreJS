var FilmCollection = Backbone.Collection.extend({
	url: '/api/films',
	model: Film,

	initialize: function(){
		console.log("initialize collection");
		this.fetch({success: function() {}, error: function() {}, wait : true});
		console.log(this.get(1));
	},

	getByID: function(_id) {
		console.log("getById: "+this.where({id:1}));
		return this.where({id: _id});
	}

});

var films = new FilmCollection();