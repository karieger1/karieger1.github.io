var React = require('react');
var $ = require('jquery');
var ListingModel = require("../models/ListingModel");
var ListingCollection = require("../collections/listingCollection");
var _ = require('../../node_modules/underscore/underscore-min.js');


module.exports = React.createClass({

        componentDidMount: function() {
            var self = this;
            this.props.listing.on("sync", function(){
                self.forceUpdate();
            })    
        }, 

        getInitialState: function() {
            return {listing: this.props.listing}
        },

	render: function() {
			var giverEls = this.props.listing.map(function(ListingModel) {
				return (
					
				<div id="userdetail">

					<div key={ListingModel.cid}>
						<div className="container">
							<div className="row">
								<div className="col-xs-6 col-xs-offset-6 col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-6 col-lg-3 col-md-offset-6">
									<h6>{ListingModel.get("userName")}</h6>
								</div>
							</div>
							
							<div className="row">	
								<div id="listingzip" className="col-xs-6 col-xs-offset-6 col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-6 col-lg-3 col-md-offset-6">
									<p>{ListingModel.get("userZip")} </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="giverElements"> 
				{giverEls}
			</div> 
		);		
	},
	
});