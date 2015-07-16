var React = require('react');
var listingCollection = require("../collections/listingCollection");


module.exports = React.createClass({

	componentWillMount: function() {
		var listings = new listingCollection();
		listings.fetch;
	},

	render: function() {
		var listingEls = this.props.listing.map(function(ListingModel) {
			return (
				<div key={ListingModel.cid}>
					<h3>{ListingModel.get('title')}</h3>
					<p>{ListingModel.get('description')}</p>
					
				</div>
			);
		});
		
	}
});