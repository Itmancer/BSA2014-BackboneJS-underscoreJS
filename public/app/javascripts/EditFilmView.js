var EditFilmView = Backbone.View.extend({
	el: $("#edit"),

	template: _.template($("#film-edit-template").html()),

	events: {
		"click #save": "save"
	},

	initialize: function() {
		console.log("EditFilmView has initialized. ModelId: " + this.model.id);
		this.listenTo(this.model, "sync", this.render)
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},

	save: function() {
		console.log("Save button pressed");
		this.model.save();
		router.navigate('/', true);
	}

});