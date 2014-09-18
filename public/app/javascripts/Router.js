var Router = Backbone.Router.extend({
	routes: {
		"": "start",
		"film/:id": "details",
		"edit/:id": "edit"
	},

	start: function() {
		console.log("start route");
		this.displayFrame("#main");
	},

	details: function(_id) {
		var model = new FilmDetails({id:_id});
		var filmDetailsView = new FilmDetailsView({model:model});
		model.fetch();
		this.displayFrame("#details");
	},

	edit: function(_id) {
		console.log("edit route");
		var model = new FilmDetails({id: _id});
		var editFilmView = new EditFilmView({model: model});
		model.fetch();
		this.displayFrame("#edit");
	},

	displayFrame: function(elementid) {
		$(".frame").hide();
		$(elementid).show();
	}
});

var router = new Router();

Backbone.history.start();