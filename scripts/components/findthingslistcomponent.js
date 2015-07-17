var React = require('react');
var listingCollection = require("../collections/listingCollection");
var ListingModel = require("../models/listingModel");


module.exports = React.createClass({
	componentWillMount: function() {
		this.state.listing.on("change", function() {
			this.forceUpdate();
		}, this);
		this.state.listings.on("add", function() {
			this.forceUpdate();
		}, this);
		
	},
	getInitialState: function () {
		var that = this;

		var listlistings = new listingCollection();

		listlistings.fetch({
			query: {username: this.props.name.id},

			success: function(listing) {
				that.setState({listing: listing.model})
			}
		});
		listlistings.on("change", function() {
			that.forceUpdate();
		})

			}
			
		})
	},

	render: function () {
		return (
			<div>
				

			</div>
		);
	}
})



/*module.exports = React.createClass({

	componentWillMount: function() {
		var listings = new listingCollection();
		listings.fetch({
			query: {
				title:{}
			}
		})
	},*/



