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

    render: function () {
        var listEls = this.props.listings.map(function(ListingModel) {
    		return (

                <div id="renderlistingdetail">
                    <div key={ListingModel.cid}>
            			<div className="container">
                        <h2>Listing details:</h2>
              				<div className="row">
              					<div id="itemdetail" className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
              						<h4>{ListingModel.get("title")}</h4>
              						<button id="giverinfo">Get giver info</button>
                                </div>
              				</div>
              			</div>
            		</div>

                </div>
    		);
	    });
    }   
});