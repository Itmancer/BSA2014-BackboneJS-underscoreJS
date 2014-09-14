var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	events: {
		"click .del-btn" : "deleteFilm"
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
	}
});