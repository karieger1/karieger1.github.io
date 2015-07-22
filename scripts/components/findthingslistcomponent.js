var React = require('react');
var ListingModel = require("../models/ListingModel");
var listingCollection = require("../collections/listingCollection");



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

/*	getInitialState: function() {
		return {listing: this.props.listing}
	},

	render: function () {
		this.state.listings.model();

		var listlistings = this.props.listings.map(function(ListingModel) {
*/
		render: function() {
			var listEls = this.props.listings.map(function(listingModel) {
				return (
					<div key={listingModel.cid}>
						<h3>{listingModel.get("title")}</h3>
					</div>
				);
			});		
		}
	
	
});


