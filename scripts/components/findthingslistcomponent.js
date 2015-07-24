var React = require('react');
var $ = require('jquery');
var ListingModel = require("../models/ListingModel");
var ListingCollection = require("../collections/listingCollection");
var _ = require('../../node_modules/underscore/underscore-min.js');
var listings = new ListingCollection();

module.exports = React.createClass({

	
		componentWillMount: function() {
			
			listings.fetch({

				success: function(listings) {
		        console.log(listings);

		   		},
		    
		    	error: function(listings, error) {
		        console.log(error);
		    	}
			})
		},

	getInitialState: function() {
		return {listings: this.props.listing}
	},
/*
	render: function () {
		this.state.listings.model();

		var listlistings = this.props.listings.map(function(ListingModel) {
*/
		render: function() {
			var listEls = this.props.listings.map(function(ListingModel) {
				return (
					<div key={ListingModel.cid}>
						<h3>{ListingModel.get("title")}</h3>
					</div>
				);
			});		
		}
	
	
});


