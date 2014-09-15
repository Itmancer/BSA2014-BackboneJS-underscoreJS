var Router = Backbone.Router.extend({
	routes: {
		"": "start",
		"film/:id": "details"
	},

	start: function() {
		console.log("start route");
		$("#main").show();
		$("#details").hide();
	},

	details: function(_id) {
		var model = new FilmDetails({id:_id});
		var filmDetailsView = new FilmDetailsView({model:model});
		model.fetch();
		$("#main").hide();
		$("#details").show();
	}
});

var router = new Router();

Backbone.history.start();