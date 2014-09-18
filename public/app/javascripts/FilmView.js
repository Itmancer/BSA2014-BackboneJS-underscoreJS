var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	events: {
		"click #del-btn" : "deleteFilm",
		"click .film-content" : "selectFilm",
		"click #edit-btn" : "editFilm"
		
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	deleteFilm: function() {
		console.log("Deleting id="+this.model.id);
		this.model.destroy();
	},

	selectFilm: function() {
		console.log("Selected film id="+this.model.id);
		router.navigate("/film/"+this.model.id, true);
	},

	editFilm: function() {
		console.log("Edit button pressed. Id="+this.model.id);
		router.navigate("/edit/" + this.model.id, true);
	}
});