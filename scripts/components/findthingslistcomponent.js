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

		

	render: function() {
			var listEls = this.props.listings.map(function(ListingModel) {
				
				return (
					
				<div id="renderlistings">

					<div key={ListingModel.cid}>
						<div className="container" id="listingbox">
							<div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
								<div className="row">
								
									<div className="listingtitlebox">
										<h4 id="listingtitle">{ListingModel.get("title")}</h4>
									</div>
							
								
									<div id="listingzip" className="listingzipbox">
										<p>Location:  {ListingModel.get("userZip")} </p>
									</div>
								
								</div>

								<div className="row">
									<div className="col-xs-4 col-s-4 col-md-3 col-lg-3">
											<img id="listingimage" src={ListingModel.get("itemImage")} />
									</div>
	
									<div className="descrip">
										<p id="listingdescr">{ListingModel.get("description")}</p>
									</div>
								</div>

								<div className="row">
									<div>
										<a className="btn btn-default" id="itemdetailbutton" href={'#itemDetail/'+ListingModel.id} role="button">More details</a>
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
	
});


