var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	events: {
		"click .del-btn" : "deleteFilm",
		"mouseover" : "highlight",
		"mouseout" : "unhighlight",
		"click #film-content" : "selectFilm"
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

	highlight: function() {
		console.log("Highlighting id="+this.model.id);
		this.$el.addClass("film-highlighted");
	},

	unhighlight: function() {
		console.log("Unhighlighting id="+this.model.id);
		this.$el.removeClass("film-highlighted");
	},

	selectFilm: function() {
		console.log("Selected film id="+this.model.id);
		router.navigate("/film/"+this.model.id, true);
	}
});