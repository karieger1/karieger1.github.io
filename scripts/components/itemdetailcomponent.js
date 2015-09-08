var React = require('react');
var $ = require('jquery');
var ListingModel = require("../models/ListingModel");
var ListingCollection = require("../collections/listingCollection");
var _ = require('../../node_modules/underscore/underscore-min.js');


module.exports = React.createClass({

        componentDidMount: function() {
            var self = this;
            this.props.listings.on("sync", function(){
                var singlelisting = self.props.listings.findWhere({objectId: self.props.id});

                self.setState ({listing: singlelisting})
                console.log('listings sync');
            })    
            console.log(this.props.id)

        }, 

        getInitialState: function() {

            return {listing: {}} 
        },
 
    render: function () {
        console.log(this.state.listing);
        
        
        return (
            <div id="renderlistingdetail">
                
                    <div className="container" id="listingdetailbox">
                        <h2 id="listingheading">Listing details:</h2>
                            <div className="row">
                                 <div id="itemdetail" className="col-xs-12 col-s-8 col-s-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                                     <h4>{this.listing.get.title}</h4>
                                </div>
                            </div>
   
                    </div>
                
            </div>
                //build out html here
        );  

    },   
});