var FilmCollection = Backbone.Collection.extend({
	url: '/api/films',
	model: Film,
	initialize: function(){
		this.fetch();
	}

});

//FilmCollection.on("remove", new function() {alert('remove');})

var films = new FilmCollection();