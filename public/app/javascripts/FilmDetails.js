var FilmDetails = Backbone.Model.extend({
	urlRoot: 'api/filmdetails',
	defaults: {
		id: undefined,
		name: "http://www.saddlebackleather.com/c.1265306/shopflow/img/no_image_available.jpeg",
		year: 2014,
		poster: "",
		details0: "details1",
		details2: "details2",
		details3: "details3",
		details4: "details4",
		details5: "details5",
		details6: "details6",
		details7: "details7",
		details8: "details8",
	}
});