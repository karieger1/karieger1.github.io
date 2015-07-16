var Backbone = require('backparse')({
    appId: 'mymJM88ioRzDIumuLBWpUsXokyFpuAtVJCYATCJH',
    apiKey: 'MFzztwSFpRYXJMyvfPfnJ7N9cOFozKK2opJNGlOA',
    apiVersion: 1
});

Backbone.$ = require("jquery");

module.exports = Backbone.Model.extend({
	defaults: {
		objectId: null,
		title: "",
		description: "",
		itemCondition: "",
		category: "",
		location : {
            "lat" : null,
            "long" : null,
        },//make this an object
		userID: "",
		userName: "",
		userEmail: "",
		userPhone: "",
		userAddress: "",
		userZip: null,
		itemImage: "",
		createdAt: null
	},

	parseClassName: 'listing',
    idAttribute: 'objectId'
});