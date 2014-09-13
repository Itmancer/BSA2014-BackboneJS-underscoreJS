var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	events: {
		"click .del-btn" : "delete"
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	delete: function() {
		alert(this.model.id);
		this.model.destroy({
			success: function() {},
			error: function() {},
			wait: true
		});
	}
});