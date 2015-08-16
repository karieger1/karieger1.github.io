var React = require('react');
var $ = require('jquery');
var ListingModel = require("../models/ListingModel");
var ListingCollection = require("../collections/listingCollection");
var _ = require('../../node_modules/underscore/underscore-min.js');


module.exports = React.createClass({
		componentWillMount: function() {
				var self = this;
				this.props.listings.on("sync", function(){
					self.forceUpdate();
				})
			},

		getInitialState: function() {
			return {listings: this.props.listing}
		},

	render: function() {
			var listEls = this.props.listings.map(function(ListingModel) {
				
				return (
					
				<div id="renderlistings">

					<div key={ListingModel.cid}>
						<div className="container" id="listingbox">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div className="row">
								
									<div className="col-xs-6 col-xs-offset-6 col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-6 col-lg-3 col-md-offset-6">
										<h4>{ListingModel.get("title")}</h4>
									</div>
								</div>
								
								<div id="listingzip" className="col-xs-6 col-xs-offset-6 col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-6 col-lg-3 col-md-offset-6">
									<p>{ListingModel.get("userZip")} </p>
								</div>
								
								
								<div className="row">
									<div className="col-xs-4 col-s-4 col-md-3 col-lg-3">
										<div id="listingimagebox">
											<img id="listingimage" src={ListingModel.get("itemImage")} />
										</div>
									</div>
								</div>

								<div className="row">
									<div>
										<a className="btn btn-default" id="itemdetailbutton" href="#itemDetail" role="button">Details</a>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</div>
				
				);
			});
			return (
				<div className="listingElements"> 
					{listEls}
				</div> 
					);		
		},

	/*viewDetails: function(e) {
			e.preventDefault();
			this.props.myApps.navigate("itemDetails", {trigger:true});

			}*/
	
});


