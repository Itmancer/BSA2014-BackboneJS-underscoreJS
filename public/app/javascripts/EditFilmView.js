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
		this.$name = this.$('#film-name');
		this.$year = this.$('#film-year');
		this.$detail0 = this.$('#film-details0');
		this.$detail2 = this.$('#film-details2');
		this.$detail3 = this.$('#film-details3');
		this.$detail4 = this.$('#film-details4');
		this.$detail5 = this.$('#film-details5');
		this.$detail6 = this.$('#film-details6');
		this.$detail7 = this.$('#film-details7');
		this.$detail8 = this.$('#film-details8');
		this.$poster = this.$('#film-poster');

	},

	save: function() {
		console.log("Save button pressed");
		this.model.save({
			name: this.$name.val(),
			year: this.$year.val(),
			details0: this.$detail0.val(),
			details2: this.$detail2.val(),
			details3: this.$detail3.val(),
			details4: this.$detail4.val(),
			details5: this.$detail5.val(),
			details6: this.$detail6.val(),
			details7: this.$detail7.val(),
			details8: this.$detail8.val(),
			poster: this.$poster.val()
		});
		router.navigate('/', true);
	}

});