var FilmCollectionView = Backbone.View.extend({
	el: '#films-container',
	
	//template: _.template($('#films-template').html()),

	events: {
		'click #add_btn': 'addNewFilm'
	},

	initialize: function(){
		this.$addBtn = this.$('#add_btn');
		this.collection.on('add', this.renderNewFilm, this);
		this.listenTo(this.collection, 'remove', this.renderAll);
	},

	renderNewFilm: function(model){
		var view = new FilmView({
			model: model
		});
		this.$el.append(view.$el);
	},

	renderAll: function() {
		console.log('Re-render All');
		this.$el.html('');
		this.collection.each(this.renderNewFilm, this);
	},

	fire: function() {
		console.log('Fired!!!');
	},

	addNewFilm: function(model) {
		console.log('adding film');
	}
	
});

var filmsView = new FilmCollectionView({
	collection: films
});

