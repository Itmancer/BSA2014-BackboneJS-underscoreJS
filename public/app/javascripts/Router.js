var Router = Backbone.Router.extend({
	routes: {
		"": "start",
		"film/:id": "details"
	},

	start: function() {
		console.log("start route");
	},

	details: function(id) {
		console.log("details route. Id="+id);
	}
});

var router = new Router();

Backbone.history.start();