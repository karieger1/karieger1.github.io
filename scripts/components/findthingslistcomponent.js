var React = require('react');
var listingCollection = require("../collections/listingCollection");

var Listing = Parse.Object.extend("listing");
var query = new Parse.Query(listing);

module.exports = React.createClass({

	componentWillMount: function() {
		var listings = new listingCollection();
		listings.fetch;
	},


var title = Listing.get("title");

	// render: function() {
	// 	var listingEls = this.props.listing.map(function(ListingModel) {
	// 		return (
	// 			<div key={ListingModel.cid}>
	// 				<h3>{ListingModel.get('title')}</h3>
	// 				<p>{ListingModel.get('description')}</p>
					
	// 			</div>
	// 		);
	// 	});
		
	// }
});