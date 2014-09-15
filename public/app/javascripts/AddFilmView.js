var AddFilmView = Backbone.View.extend({
	el: $("#add-film-container"),

	events: {
		"click #add_btn": "addFilm"
	},

	curId: 100,

	addFilm: function() {
		var name = this.$(".film-name").val();
		var year = this.$(".film-year").val();
		console.log('Add Film Button Pressed. Name: '+ name+", Year: "+year);
		if (name.trim().length && year.trim().length) {
			var newFilm = new Film({name: name, year:year});
			newFilm.save(); //don't know why but at this place 2 models created: one - with default values and another - with provided ones
			this.collection.add(newFilm);
			this.$el.removeClass("error");
			this.$(".film-name").val('');
			this.$(".film-year").val('');
		}
		else {
			this.$el.addClass("error");
		}
	}
});

var addFilmView = new AddFilmView({collection:films});