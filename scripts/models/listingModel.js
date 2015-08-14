var Backbone = require('backparse')(require('../config/parse'));

module.exports = Backbone.Model.extend({
	defaults: {
		objectId: null,
		icon:"",
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