var React = require('react');
var listingCollection = require("../collections/listingCollection");


var ListingModel = require("../models/listingModel");

module.exports = React.createClass({

	componentWillMount: function() {
		var listings = new listingCollection();
		listings.fetch({

			success: function(listings) {
	        console.log(listings);

	   		},
	    
	    	error: function(listings, error) {
	        console.log(error);
	    	}
		})
	},

	render: function () {
		return (
			<div>
				

			</div>
		);
	}
});


/*var Listings = Parse.Object.extend("Listings");
var FTL = Parse.Collection.extend({
    model: listing
});

var ftl = new FTL();

ftl.fetch({
    success: function(ftl) {
        console.log(ftl);
    },
    error: function(ftl, error) {
        console.log(error);
    }
});*/


/*module.exports = React.createClass({
	

	getInitialState: function () {
		var that = this;
		var listlistings = new listingCollection();

		listlistings.fetch({
			query: {username: this.props.listing.title},

			success: function(listing) {
				that.setState({listing: listing.model});
			}
		});

	componentWillMount: function() {
		this.state.listing.on("change", function() {
			this.forceUpdate();
		}, this);
		this.state.listings.on("add", function() {
			this.forceUpdate();
		}, this);
		
	},

		listlistings.on("change", function() {
			that.forceUpdate();
		})

			return {
				
		};
	},

*/






