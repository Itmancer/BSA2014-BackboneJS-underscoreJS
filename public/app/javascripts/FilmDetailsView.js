var FilmDetailsView = Backbone.View.extend({
	el: $("#details"),

	template: _.template($('#film-details-template').html()),

	events: {
		"click #save_return": "saveReturn"
	},

	initialize: function() {
		console.log("details rendered. ModelId="+this.model.id);
		this.listenTo(this.model, "sync", this.render)
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	saveReturn: function() {
		router.navigate("/", true);
	}
})